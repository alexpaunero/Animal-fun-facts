import { animals } from './animals';

// Task 1
import React from 'react';
import { createRoot } from 'react-dom/client';

// Task 2
const container = document.getElementById('app');

// Task 3
const root = createRoot(container);

// Task 4
const title = '';

// Task 7
const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>

// Task 11
const displayFact = (e) => {
  const animal = e.target.alt;
  const optionIndex = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[optionIndex];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

// Task 9
const images = [];
for (const animal in animals) {
  images.push(
    <img 
      onClick={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />)
}

// Task 14
const showBackground = true;


// Tasks 5, 8, 10, 12
const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact!'}</h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>
      {images}
    </div>
  </div>
);

// Task 6
root.render(animalFacts);
