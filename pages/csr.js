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
        {data && data.map((person) => 
          <li key={person.id} >Name: {person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Csr;