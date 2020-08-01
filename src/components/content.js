import React from 'react';

import './content.css';
import About from './about';

const Content = () => {
  const items = [
    {
      // Goods
    },
  ];

  const classes = [
    'Автомобили',
    'Бытовая техника',
    'Мобильная техника',
    'Компьютеры',
    'Одежда',
    'Недвижимость',
  ];

  return (
    <main>
      <div className="path">path</div>
      <ul className="listofclasses">
        {classes.map(cl => {
          return <li>{cl}</li>;
        })}
      </ul>
      <About />
    </main>
  );
};

export default Content;
