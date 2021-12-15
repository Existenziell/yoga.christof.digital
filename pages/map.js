// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initializeMap } from '../lib/map/initializeMap'
import { addDataLayer } from '../lib/map/addDataLayer'
import { timeline } from '../lib/timeline'
import Head from 'next/head'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const MapComponent = () => {
  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)
  const router = useRouter()

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

    // If the URL contains ?location=x (coming from the timeline), open a popup on the map
    const location = router.query.location
    if (location) {
      initializeMap(mapboxgl, map, location)
    } else {
      initializeMap(mapboxgl, map)
    }
    setMap(map)
  }, [router.query.location])

  useEffect(() => {
    if (pageIsMounted && timeline) {
      Map.on('load', () => {
        addDataLayer(Map, timeline)
      })
    }
  }, [pageIsMounted, setMap, Map])

  return (
    <>
      <Head>
        <title>Map | yoga.christof.digital</title>
        <meta name='description' content='Explore with me | yoga.christof.digital | shift-happens | Yoga &amp; Movement' />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <div id='map' className='w-full h-screen' />
    </>
  )
}

export default MapComponent
