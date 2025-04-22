import React, { useEffect, useState } from 'react'

const Data = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      if (data && data.length) setData(data);
    }
    getData();
  },[])
  return (
    <div>
      <h1>The Data is Given Here:</h1>
      {
        data.map((d)=><li key={d.id}>{d.title}</li>)
      }
    </div>
  )
}

export default Data