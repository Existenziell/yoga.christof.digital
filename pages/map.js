// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js
import { useEffect, useState } from 'react'
import { initializeMap } from '../lib/map/initializeMap'
import { addDataLayer } from '../lib/map/addDataLayer'
import Layout from '../components/Layout'
import 'mapbox-gl/dist/mapbox-gl.css'
import { timeline as data } from '../lib/timeline'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const MapComponent = () => {
  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  useEffect(() => {
    setPageIsMounted(true)

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      // style: 'mapbox://styles/mapbox/dark-v10',
      // style: 'mapbox://styles/mapbox/streets-v11',
      // style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [30, 20],
      zoom: 1.7,
      // pitch: 45,
    })

    initializeMap(mapboxgl, map)
    setMap(map)
  }, [])

  useEffect(() => {
    if (pageIsMounted && data) {
      Map.on('load', function () {
        addDataLayer(Map, data)
      })
    }
  }, [pageIsMounted, setMap, Map])

  return (
    <div id='map' className='w-full h-screen' />
  )
}

MapComponent.getLayout = function getLayout(page) {
  return (
    <Layout title='Map'>
      {page}
    </Layout>
  )
}

export default MapComponent
