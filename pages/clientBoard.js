import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import logo_IMA from "../public/logo_IMA.png"
import { Tab } from '@headlessui/react'
import PrevisionComponent from '../components/Prevision.js'
import mapboxgl from '!mapbox-gl';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

mapboxgl.accessToken = 'pk.eyJ1IjoibTJ0ZWFtNW5pb3J0IiwiYSI6ImNrenY3cnU1cDI2bW0ycnBlc3BkYXA4bzQifQ.43jtYa8gaX4YoqdCdm7PJQ';

const ClientBoard = () => {

  const mapContainer = useRef(null)

  useEffect(() => {

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
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.7782201767, 45.7752990723]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.7910184, 45.7297541]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.916667, 45.733333]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.8527487, 45.7092314]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.8901709, 45.771944]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          }
        ]
      };

      // Map addSource
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

      map.addSource("house-1", {
        type: "geojson",
        data:
        {
          "type": "FeatureCollection", "features": [{
            "type": "Feature", "geometry":
            {
              "type": "Polygon", "coordinates": [[[[[50, 45], [425, 844], [425, 933], [354, 933], [354, 844]]]
              ]]
            }, "properties": { "code": "69242", "nom": "Taponas" }
          }]
        }
      })

      map.addSource("city-risk-1", {
        type: "geojson",
        data: { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[4.7801165107648, 45.722883545162], [4.7717666896245, 45.728780570235], [4.781154251933, 45.736137401338], [4.777461518941, 45.747063716435], [4.7933379061419, 45.748472374426], [4.8024371545496, 45.751728431539], [4.8134917168187, 45.747760054077], [4.8089112412139, 45.741695188869], [4.8099650219837, 45.735101191233], [4.8028709883959, 45.72306051897], [4.7801165107648, 45.722883545162]]] }, "properties": { "code": "69202", "nom": "Sainte-Foy-l\u00e8s-Lyon" } }
      })

      map.addSource("city-risk-2", {
        type: "geojson",
        data: { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[4.8491808486023, 45.719034313997], [4.8374902104712, 45.718513938207], [4.8405482389998, 45.708049792607], [4.8372389612156, 45.707312955861], [4.8230495108397, 45.714604202709], [4.8206729627925, 45.718887741282], [4.8189610569531, 45.725091656964], [4.8214015252674, 45.73538628486], [4.8385604424625, 45.756738842703], [4.8599093776869, 45.74955309713], [4.8560002242155, 45.740459714641], [4.8491018297175, 45.738245561056], [4.8471962191056, 45.725448551355], [4.8491808486023, 45.719034313997]]] }, "properties": { "code": "69387", "nom": "Lyon 7e  Arrondissement" } }
      })

      map.addSource("city-risk-3", {
        type: "geojson",
        data: { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[4.839946716944, 45.763553700211], [4.8699882884202, 45.763725308404], [4.8787451742097, 45.754807453778], [4.8990167905925, 45.752455660235], [4.8922840453965, 45.73901710262], [4.8599093776869, 45.74955309713], [4.8385604424625, 45.756738842703], [4.839946716944, 45.763553700211]]] }, "properties": { "code": "69383", "nom": "Lyon 3e  Arrondissement" } }
      })

      map.addSource("city-risk-4", {
        type: "geojson",
        data: { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[4.839946716944, 45.763553700211], [4.8397578251826, 45.766267988238], [4.8397372851549, 45.773072463601], [4.8430535699333, 45.778607393462], [4.8531212724599, 45.786393298158], [4.860393697849, 45.786455585392], [4.8583345034628, 45.772434386609], [4.8699882884202, 45.763725308404], [4.839946716944, 45.763553700211]]] }, "properties": { "code": "69386", "nom": "Lyon 6e  Arrondissement" } }
      })

      map.addSource("city-risk-5", {
        type: "geojson",
        data: { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[4.839946716944, 45.763553700211], [4.8385604424625, 45.756738842703], [4.8214015252674, 45.73538628486], [4.8189610569531, 45.725091656964], [4.8142660361499, 45.733565679357], [4.813650393048, 45.742715241575], [4.8181044872456, 45.748908964506], [4.8228275341787, 45.751796113612], [4.8304849917407, 45.764711956596], [4.8397578251826, 45.766267988238], [4.839946716944, 45.763553700211]]] }, "properties": { "code": "69382", "nom": "Lyon 2e  Arrondissement" } }
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
        id: "city-risk-1-fill",
        type: "fill",
        source: "city-risk-1",
        paint: {
          "fill-opacity": 0.4,
          "fill-color": "green",
        },
      })

      map.addLayer({
        id: "city-risk-2-fill",
        type: "fill",
        source: "city-risk-2",
        paint: {
          "fill-opacity": 0.4,
          "fill-color": "orange",
        },
      })

      map.addLayer({
        id: "city-risk-3-fill",
        type: "fill",
        source: "city-risk-3",
        paint: {
          "fill-opacity": 0.4,
          "fill-color": "orange",
        },
      })

      map.addLayer({
        id: "city-risk-4-fill",
        type: "fill",
        source: "city-risk-4",
        paint: {
          "fill-opacity": 0.4,
          "fill-color": "red",
        },
      })

      map.addLayer({
        id: "city-risk-5-fill",
        type: "fill",
        source: "city-risk-5",
        paint: {
          "fill-opacity": 0.4,
          "fill-color": "red",
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

      // Circle 1
      var center = turf.point([4.835659, 45.764043]);
      var radius = 2;
      var options = {
        steps: 80,
        units: 'kilometers'
      };

      var circle = turf.circle(center, radius, options);

      // Circle 2
      var center2 = turf.point([4.7782201767, 45.7752990723]);
      var radius2 = 2;
      var option2 = {
        steps: 80,
        units: 'kilometers'
      };

      var circle2 = turf.circle(center2, radius2, option2);

      // Circle 3
      var center3 = turf.point([4.7910184, 45.7297541]);
      var radius3 = 2;
      var option3 = {
        steps: 80,
        units: 'kilometers'
      };

      var circle3 = turf.circle(center3, radius3, option3);

      // Circle 4
      var center4 = turf.point([4.916667, 45.733333]);
      var radius4 = 2;
      var option4 = {
        steps: 80,
        units: 'kilometers'
      };

      var circle4 = turf.circle(center4, radius4, option4);

      // Circle 5
      var center5 = turf.point([4.8527487, 45.7092314]);
      var radius5 = 2;
      var option5 = {
        steps: 80,
        units: 'kilometers'
      };

      var circle5 = turf.circle(center5, radius5, option5);

      // Circle 4
      var center4 = turf.point([4.916667, 45.733333]);
      var radius4 = 2;
      var option4 = {
        steps: 80,
        units: 'kilometers'
      };

      var circle4 = turf.circle(center4, radius4, option4);

      // Circle 6
      var center6 = turf.point([4.8901709, 45.771944]);
      var radius6 = 2;
      var option6 = {
        steps: 80,
        units: 'kilometers'
      };

      var circle6 = turf.circle(center6, radius6, option6);

      // Circle 1
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

      // Circle 2
      map.addLayer({
        "id": "circle-fill2",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle2
        },
        "paint": {
          "fill-color": "pink",
          "fill-opacity": 0.5
        }
      });
      map.addLayer({
        "id": "circle-outline2",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle2
        },
        "paint": {
          "fill-color": "blue",
          "fill-opacity": 0.1,
        },
        "layout": {

        }
      });
      map.addLayer({
        id: "city-69-line-692",
        type: "line",
        source: {
          "type": "geojson",
          "data": circle2
        },
        paint: {
          "line-color": "#6B6767",
          "line-width": 4,
        },
      })

      // Circle 3
      map.addLayer({
        "id": "circle-fill3",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle3
        },
        "paint": {
          "fill-color": "pink",
          "fill-opacity": 0.5
        }
      });
      map.addLayer({
        "id": "circle-outline3",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle3
        },
        "paint": {
          "fill-color": "blue",
          "fill-opacity": 0.1,
        },
        "layout": {

        }
      });
      map.addLayer({
        id: "city-69-line-693",
        type: "line",
        source: {
          "type": "geojson",
          "data": circle3
        },
        paint: {
          "line-color": "#6B6767",
          "line-width": 4,
        },
      })

      // Circle 4
      map.addLayer({
        "id": "circle-fill4",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle4
        },
        "paint": {
          "fill-color": "pink",
          "fill-opacity": 0.5
        }
      });
      map.addLayer({
        "id": "circle-outline4",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle4
        },
        "paint": {
          "fill-color": "blue",
          "fill-opacity": 0.1,
        },
        "layout": {

        }
      });
      map.addLayer({
        id: "city-69-line-694",
        type: "line",
        source: {
          "type": "geojson",
          "data": circle4
        },
        paint: {
          "line-color": "#6B6767",
          "line-width": 4,
        },
      })

      // Circle 6
      map.addLayer({
        "id": "circle-fill6",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle6
        },
        "paint": {
          "fill-color": "pink",
          "fill-opacity": 0.5
        }
      });
      map.addLayer({
        "id": "circle-outline6",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle6
        },
        "paint": {
          "fill-color": "blue",
          "fill-opacity": 0.1,
        },
        "layout": {

        }
      });
      map.addLayer({
        id: "city-69-line-696",
        type: "line",
        source: {
          "type": "geojson",
          "data": circle6
        },
        paint: {
          "line-color": "#6B6767",
          "line-width": 4,
        },
      })
      // Circle 5
      map.addLayer({
        "id": "circle-fill6",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle6
        },
        "paint": {
          "fill-color": "pink",
          "fill-opacity": 0.5
        }
      });
      map.addLayer({
        "id": "circle-outline5",
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": circle5
        },
        "paint": {
          "fill-color": "blue",
          "fill-opacity": 0.1,
        },
        "layout": {

        }
      });
      map.addLayer({
        id: "city-69-line-695",
        type: "line",
        source: {
          "type": "geojson",
          "data": circle5
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

  return (<>
    <div className=" w-full px-5 md:px-20 pb-10">

      <div className="relative z-10 flex items-end justify-between pt-4 lg:pt-20 pb-6 border-b border-gray-200">
        <div className='w-full flex items-end '>
          <div className='hidden md:block'>
            <Image
              src="/logo_IMA.png"
              alt="Logo IMA"
              width={250}
              height={70}

            />
          </div>


          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Bonjour !</h1>
            <h1 className="text-xl font-medium tracking-tight text-gray-900">Bienvenue sur votre plateforme PréCollab, un outil IMA / IMH.</h1>

          </div>
        </div>
      </div>

      <Tab.Group >
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 md:w-1/2 w-full mt-5">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Temps réel
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            En prévision
          </Tab>


        </Tab.List>
        <Tab.Panels className="border-4 border-dashed border-gray-200 p-4 rounded-lg  mt-6 ">


          <Tab.Panel>
            <div className='relative'>
              <div className='absolute w-40 bg-white z-50 top-2 right-2 space-y-2 p-4 rounded-lg'>

                <div className='flex align-items space-x-4'>
                  <div className='bg-green-400 w-12 h-6' />
                  <h3 className='text-sm'>Faible</h3>
                </div>

                <div className='flex align-items space-x-4'>
                  <div className='bg-orange-400 w-12 h-6' />
                  <h3 className='text-sm'>Modéré</h3>
                </div>

                <div className='flex align-items space-x-4'>
                  <div className='bg-red-400 w-12 h-6' />
                  <h3 className='text-sm'>Élevé</h3>
                </div>

              </div>
              <div style={{ height: '500px' }} className='w-full' ref={mapContainer} />
            </div>
          </Tab.Panel>




          <Tab.Panel>
            <PrevisionComponent />


          </Tab.Panel>



        </Tab.Panels>
      </Tab.Group>





    </div>
  </>)
};

export default ClientBoard;
