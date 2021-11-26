import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { mapbox } from "./mapbox.js"
import { timeline as mapdata } from "../timeline.js"

export function initializeMap(mapboxgl, map) {

  let geocoder

  const createMarkerHtml = (data) => {
    const { date, name, subname, image, description } = data.properties
    return `
        <div class'popup'>
            <span>${date}</span>
            <h1>${name}</h1>
            <img src='/timeline/${image}.jpg' alt='${image}' />
            <h2>${subname}</h2>
            <p>${description}</p>
        </div>
    `
  }

  // Use custom Geocoder to include the features in map.json
  const forwardGeocoder = (query) => {
    let matchingFeatures = []
    for (let i = 0; i < mapdata.features.length; i++) {
      let feature = mapdata.features[i]
      if (feature.id.toLowerCase().search(query.toLowerCase()) !== -1) {
        feature["center"] = feature.geometry.coordinates
        feature["place_name"] = "🙏 " + feature.id
        matchingFeatures.push(feature)
      }
    }
    return matchingFeatures
  }

  const createGeo = () => {
    geocoder = new MapboxGeocoder({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      localGeocoder: forwardGeocoder,
      marker: false,
      zoom: 5,
      placeholder: "Search event / location",
      mapbox: mapbox,
      limit: 20,
    })

    // Add geolocate control to the map.
    const geolocate = new mapbox.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })

    // Add search bar and geolocate button
    map.addControl(geocoder)
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )

    // Open corresponding popup if result is clicked
    geocoder.on("result", (e) => {
      // Close all open popups
      const popup = document.querySelector(".popup")
      if (popup) popup.parentNode.removeChild(popup)
      // Create new poppup only if own result
      if (e.result.properties.name) {
        let html = createMarkerHtml(e.result)
        let coords = e.result.geometry.coordinates
        let popup = new mapbox.Popup({ offset: 15 })
          .setLngLat(coords)
          .setHTML(html)
          .addTo(map)
      }
    })
  }

  map.on("click", "data", function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["data"],
    })
    var clusterId = features[0].properties.cluster_id
    map
      .getSource("yoga")
      .getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) return
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        })
      })
  })

  map.on("click", "clusters", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    })
    const clusterId = features[0].properties.cluster_id
    map
      .getSource("yoga")
      .getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
          essential: true,
        })
      })
  })

  map.on("click", "unclustered-point", (e) => {
    let coordinates = e.features[0].geometry.coordinates.slice()
    let html = createMarkerHtml(e.features[0])
    new mapbox.Popup().setLngLat(coordinates).setHTML(html).addTo(map)
    map.flyTo({
      // These options control the ending camera position: centered at the target
      center: coordinates,
      offset: [0, 300],
      // zoom: 9,
      bearing: 1, // north up
      speed: 0.5, // make the flying slow
      // curve: 1, // change the speed at which it zooms out
      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true,
    })
  })

  map.on("mouseenter", "data", function () {
    map.getCanvas().style.cursor = "pointer"
  })
  map.on("mouseleave", "data", function () {
    map.getCanvas().style.cursor = ""
  })

  createGeo()
}
