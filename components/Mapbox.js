import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibTJ0ZWFtNW5pb3J0IiwiYSI6ImNrenY3cnU1cDI2bW0ycnBlc3BkYXA4bzQifQ.43jtYa8gaX4YoqdCdm7PJQ';

export default function Mapbox() {

        const mapContainer = useRef()
      
        // this is where all of our map logic is going to live
        // adding the empty dependency array ensures that the map
        // is only rendered once
        useEffect(() => {
          // create the map and configure it
          // check out the API reference for more options
          // https://docs.mapbox.com/mapbox-gl-js/api/map/
          const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [2.20, 48.50],
            zoom: 4,
          })
      
          // only want to work with the map after it has fully loaded
          // if you try to add sources and layers before the map has loaded
          // things will not work properly
          map.on("load", () => {
            // add mapbox terrain dem source for 3d terrain rendering
           
            // bus routes source
            // another example of using a geojson source
            // this time we are hitting an ESRI API that returns
            // data in the geojson format
            // see https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson
            map.addSource("dept", {
              type: "geojson",
              data:
                "https://france-geojson.gregoiredavid.fr/repo/departements/56-morbihan/departement-56-morbihan.geojson",
            })
      
            // bus routes - line layer
            // see https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line
            map.addLayer({
              id: "bus-routes-fill",
              type: "fill",
              source: "dept",
              paint: {
                "fill-opacity": 0.3,
                "fill-color": "#19d0d6",
              },
            })

            map.addLayer({
                id: "bus-routes-line",
                type: "line",
                source: "dept",
                paint: {
                  "line-color": "#19d0d6",
                  "line-width": 4,
                },
              })
      
          })
      
          // cleanup function to remove map on unmount
          return () => map.remove()
        }, [])
      
        return <div ref={mapContainer}  />
      }
