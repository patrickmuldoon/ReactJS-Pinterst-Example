import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PinterestCard from './pinterestCard';

const PinterestBoard = ({cards}) => (
  <ul className="board">
    {cards.map(card => (
      <li key={card.id}>
        <PinterestCard card={card}/>
      </li>
    ))}
  </ul>
);

let testCards = [
  {
    id: 1,
    title: 'AVIATION',
    subtitle: "Aviation Exploration",
    pins: 641,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 2,
    title: 'Exceptional Aviation',
    subtitle: "Aviation Exploration",
    pins: 209,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 3,
    title: 'Aerospace',
    subtitle: "Aviation Exploration",
    pins: 1545,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  }
];

ReactDOM.render(
  <PinterestBoard cards={testCards} />,
  document.getElementById('root')
);
