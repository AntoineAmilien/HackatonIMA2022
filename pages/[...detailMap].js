import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function detailMap() {

  const router = useRouter();

  console.log(router.query.dept)

  return (
    <p>DetailMap</p>
  )
}