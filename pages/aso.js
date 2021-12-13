import { useState, useEffect } from 'react';
import useSWR from 'swr'

const API = 'https://61b73054c95dd70017d4135c.mockapi.io/people';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Csr() {
  const { data, error } = useSWR(API, fetcher);

  return (
    <div>
      <h1>People:</h1>
      <ul>
        <li>Name: Dom Eccleston</li>
        <li>Name: Ben Seymour</li>
        <li>Name: Lindsay Gilson</li>
      </ul>
    </div>
  )
}

export default Csr;