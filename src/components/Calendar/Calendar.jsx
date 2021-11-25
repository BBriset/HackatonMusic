import { useState, useEffect } from 'react';
import Door from '../Door/Door';
import './Calendar.css';
import Bass from './Pictures/bass.svg';
import Batterie from './Pictures/batterie.svg';
import Casque from './Pictures/casque.svg';
import Chausette from './Pictures/chausette.svg';
import Clesol from './Pictures/clesol.svg';
import K7 from './Pictures/k7.svg';
import Kdo from './Pictures/kdo.svg';
import Note from './Pictures/note.svg';
import Note2 from './Pictures/note2.svg';
import Perenoel from './Pictures/perenoel.svg';
import Renne from './Pictures/renne.svg';
import Vinyle from './Pictures/vinyle.svg';

export default function Calendar() {
  const [doors, setDoors] = useState([]);
  const initDoors = [
    {
      isOpen: false,
      artist: 'Mariah Carey',
      song: 'All I Want for christmas is you',
      img: Bass,
      url: 'mariah-carey-all-i-want-for-christmas-is-you',
    },
    {
      isOpen: false,
      artist: 'Wham',
      song: 'Last Christmas',
      img: Batterie,
      url: 'wham-last-christmas',
    },
    {
      isOpen: false,
      artist: 'Sabaton',
      song: 'Christmas Truce',
      img: Casque,
      url: 'sabaton-christmas-truce',
    },
    {
      isOpen: false,
      artist: 'Trans Siberian Orchestra',
      song: 'Christmas Eve Sarajevo',
      img: Chausette,
      url: 'trans-siberian-orchestra-christmas-eve-sarajevo',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Silent Night',
      img: Clesol,
      url: 'christmas-silent-night-easy',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Carol Of The Bells',
      img: K7,
      url: 'christmas-carol-of-the-bells',
    },
    {
      isOpen: false,
      artist: 'Slade',
      song: 'Merry Christmas Everybody',
      img: Kdo,
      url: 'slade-merry-christmas-everybody',
    },
    {
      isOpen: false,
      artist: 'Sungha Jung',
      song: 'Christmas Carol Medley',
      img: Note,
      url: 'sungha-jung-christmas-carol-medley',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Hark The Herald Angels',
      img: Note2,
      url: 'christmas-hark-the-herald-angels-sing',
    },
    {
      isOpen: false,
      artist: 'Santa Klaus',
      song: 'Jingle Bells',
      img: Perenoel,
      url: 'christmas-jingle-bells-metal-version',
    },
    {
      isOpen: false,
      artist: 'Band Aid',
      song: "Do They Know It's Christmas",
      img: Renne,
      url: 'band-aid-do-they-know-its-christmas',
    },
    {
      isOpen: false,
      artist: 'Ryuichi Sakamoto',
      song: 'Merry Christmas',
      img: Vinyle,
      url: 'ryuichi-sakamoto-merry-christmas',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Frosty The Snowman',
      img: Bass,
      url: 'christmas-frosty-the-snon',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Christmas Here Comes Santa Claus',
      img: Batterie,
      url: 'christmas-here-comes-santa-claus',
    },
    {
      isOpen: false,
      artist: 'Eagles',
      song: 'Please Come Home For Christmas',
      img: Casque,
      url: 'eagles-please-come-home-for-christmas',
    },
    {
      isOpen: false,
      artist: 'Blink 182',
      song: "I Won't Be Home For Christmas",
      img: Chausette,
      url: 'blink-182-i-wont-be-home-for-christmas',
    },
    {
      isOpen: false,
      artist: 'The Darkness',
      song: 'Christmas Time',
      img: Clesol,
      url: 'darkness-christmas-time',
    },
    {
      isOpen: false,
      artist: 'Sungha Jung',
      song: 'Last Christmas',
      img: K7,
      url: 'sungha-jung-last-christmas',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'O Come O come Emmanuel',
      img: Kdo,
      url: 'christmas-o-come-o-come-emmanuel',
    },
    {
      isOpen: false,
      artist: 'Ted Greene',
      song: 'Have Yourself A Merry Little Christmas',
      img: Note,
      url: 'ted-greene-have-yourself-a-merry-little-christmas',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Christmas O Holy Night',
      img: Note2,
      url: 'christmas-o-holy-night',
    },
    {
      isOpen: false,
      artist: 'Kotaro Oshio',
      song: 'Merry Christmas Mr Lawrence',
      img: Perenoel,
      url: 'kotaro-oshio-merry-christmas-mr-lawrence',
    },
    {
      isOpen: false,
      artist: 'Trans Siberian Orchestra',
      song: 'A Mad Russians Christmas',
      img: Renne,
      url: 'trans-siberian-orchestra-a-mad-russians-christmas',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'We Wish You A Merry Christmas',
      img: Vinyle,
      url: 'christmas-we-wish-you-a-merry-christmas',
    },
  ];

  useEffect(() => {
    const tmpDoors = [...initDoors].map((item, index, arr) => ({
      ...item,
      num: index,
      total: arr.length,
      rand: Math.random(),
    }));
    setDoors(tmpDoors);
  }, []);

  return (
    <ul className="layout">
      {doors
        .sort((a, b) => a.rand - b.rand)
        .map((item) => {
          return (
            <li key={item.index}>
              <Door
                {...item}
                open={(idx) => {
                  const tmpDoors = [...doors];
                  tmpDoors.find((elt) => elt.num === idx).isOpen = true;
                  setDoors(tmpDoors);
                }}
              />
            </li>
          );
        })}
    </ul>
  );
}
