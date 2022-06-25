






































































































































































































import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Mapbox from '../components/mapbox';

export default function detailMap({dept,city}) {

  return (
    <Mapbox />
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  let idDept;
  if(context.query.dept){
    idDept = context.query.dept
  }

  const resCity = await fetch(`https://france-geojson.gregoiredavid.fr/repo/departements/${idDept}/communes-${idDept}.geojson`)
  const city = await resCity.json()

  const resDept = await fetch(`https://france-geojson.gregoiredavid.fr/repo/departements/${idDept}/departement-${idDept}.geojson`)
  const dept = await resDept.json()

  // Pass data to the page via props
  return { 
    props: { 
    city,
    dept
    } 
  }
}