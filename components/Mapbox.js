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
            center: [4.715659, 45.890043],
            zoom: 8.1
          })
    
          map.on("load", async () => {

            const geojson = {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [4.835659, 45.764043]
                  },
                  properties: {
                    title: 'Mapbox',
                    description: 'Washington, D.C.'
                  }
                },
              ]
            };

            map.addSource("dept-69", {
              type: "geojson",
              data:
                "https://france-geojson.gregoiredavid.fr/repo/departements/69-rhone/departement-69-rhone.geojson",
            })
            map.addSource("city-69", {
              type: "geojson",
              data:
                "https://france-geojson.gregoiredavid.fr/repo/departements/69-rhone/communes-69-rhone.geojson",
            })

            map.addLayer({
              id: "dept-69-fill",
              type: "fill",
              source: "dept-69",
              paint: {
                "fill-opacity": 0.2,
                "fill-color": "#19d0d6",
              },
            })
            map.addLayer({
              id: "city-69-line",
              type: "line",
              source: "city-69",
              paint: {
                "line-color": "#A4A1A1",
                "line-width": 1,
              },
            })
            map.addLayer({
              id: "house-1-skin",
              type: "line",
              source: "house-1",
              paint: {
                "line-color": "#000000",
                "line-width": 2,
              },
            })

            for (const feature of geojson.features) {
              // create a HTML element for each feature
              const el = document.createElement('div');
              el.className = 'marker';
            
              // make a marker for each feature and add to the map
              new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
            }

            // First House
            var center = turf.point([4.835659, 45.764043]);
            var radius = 2;
            var options = {
              steps: 80,
              units: 'kilometers'
            };

            var circle = turf.circle(center, radius, options);
            

    map.addLayer({
        "id": "circle-fill",
        "type": "fill",
        "source": {
            "type": "geojson",
            "data": circle
        },
        "paint": {
            "fill-color": "pink",
            "fill-opacity": 0.5
        }
    });
    map.addLayer({
        "id": "circle-outline",
        "type": "fill",
        "source": {
            "type": "geojson",
            "data": circle
        },
        "paint": {
            "fill-color": "blue",
            "fill-opacity": 0.1,
        },
        "layout": {

        }
    });
    map.addLayer({
      id: "city-69-line-69",
      type: "line",
      source: {
        "type": "geojson",
        "data": circle
    },
      paint: {
        "line-color": "#6B6767",
        "line-width": 4,
      },
    })

            map.resize()
            
          })
      
          // cleanup function to remove map on unmount
          return () => map.remove()
        }, [])
      
        return <div style={{height: '500px'}} className='w-full' ref={mapContainer}  />
      }
