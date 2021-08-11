import React, { useState } from 'react'
import { GifSearch } from './components/GifSearch';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

  const [categories, setCategories] = useState([]);


  return (
    <div>
      <h2>Gif App</h2>

      <GifSearch setCategories={setCategories} />
      <br />

      <ul>
        {categories.map((category, i) => {
          return <GifGrid key={i} category={category} />
        })}
      </ul>

    </div>
  )
};


export default GifApp;
