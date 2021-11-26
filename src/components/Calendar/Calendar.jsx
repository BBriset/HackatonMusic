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
      video: 'aAkMkVFwAoo',
    },
    {
      isOpen: false,
      artist: 'Wham',
      song: 'Last Christmas',
      img: Batterie,
      url: 'wham-last-christmas',
      video: 'E8gmARGvPlI',
    },
    {
      isOpen: false,
      artist: 'Sabaton',
      song: 'Christmas Truce',
      img: Casque,
      url: 'sabaton-christmas-truce',
      video: 'HPdHkHslFIU',
    },
    {
      isOpen: false,
      artist: 'Trans Siberian Orchestra',
      song: 'Christmas Eve Sarajevo',
      img: Chausette,
      url: 'trans-siberian-orchestra-christmas-eve-sarajevo',
      video: 'MHioIlbnS_A',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Silent Night',
      img: Clesol,
      url: 'christmas-silent-night-easy',
      video: 'nEH7_2c644Q',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Carol Of The Bells',
      img: K7,
      url: 'christmas-carol-of-the-bells',
      video: 'V7nSKqfBk6k',
    },
    {
      isOpen: false,
      artist: 'Slade',
      song: 'Merry Christmas Everybody',
      img: Kdo,
      url: 'slade-merry-christmas-everybody',
      video: 'BpfHSqLXePI',
    },
    {
      isOpen: false,
      artist: 'Sungha Jung',
      song: 'Christmas Carol Medley',
      img: Note,
      url: 'sungha-jung-christmas-carol-medley',
      video: 'F_pfcMkW8Eo',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Hark The Herald Angels',
      img: Note2,
      url: 'christmas-hark-the-herald-angels-sing',
      video: 'xqooC4ZG75Y',
    },
    {
      isOpen: false,
      artist: 'Santa Klaus',
      song: 'Jingle Bells',
      img: Perenoel,
      url: 'christmas-jingle-bells-metal-version',
      video: 'mlb5go7FRYw',
    },
    {
      isOpen: false,
      artist: 'Band Aid',
      song: "Do They Know It's Christmas",
      img: Renne,
      url: 'band-aid-do-they-know-its-christmas',
      video: 'mlb5go7FRYw',
    },
    {
      isOpen: false,
      artist: 'Ryuichi Sakamoto',
      song: 'Merry Christmas',
      img: Vinyle,
      url: 'ryuichi-sakamoto-merry-christmas',
      video: 'aAkMkVFwAoo',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Frosty The Snowman',
      img: Bass,
      url: 'christmas-frosty-the-snon',
      video: 'k6zW225k_O0',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Christmas Here Comes Santa Claus',
      img: Batterie,
      url: 'christmas-here-comes-santa-claus',
      video: 'ysxlUmLOttQ',
    },
    {
      isOpen: false,
      artist: 'Eagles',
      song: 'Please Come Home For Christmas',
      img: Casque,
      url: 'eagles-please-come-home-for-christmas',
      video: '5LUfDEATQHM',
    },
    {
      isOpen: false,
      artist: 'Blink 182',
      song: "I Won't Be Home For Christmas",
      img: Chausette,
      url: 'blink-182-i-wont-be-home-for-christmas',
      video: 'sy9_JjLnmZI',
    },
    {
      isOpen: false,
      artist: 'The Darkness',
      song: 'Christmas Time',
      img: Clesol,
      url: 'darkness-christmas-time',
      video: 'lrVg1toMzuo',
    },
    {
      isOpen: false,
      artist: 'Sungha Jung',
      song: 'Last Christmas',
      img: K7,
      url: 'sungha-jung-last-christmas',
      video: 'chozyt3e0J4',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'O Come O come Emmanuel',
      img: Kdo,
      url: 'christmas-o-come-o-come-emmanuel',
      video: 'iO7ySn-Swwc',
    },
    {
      isOpen: false,
      artist: 'Ted Greene',
      song: 'Have Yourself A Merry Little Christmas',
      img: Note,
      url: 'ted-greene-have-yourself-a-merry-little-christmas',
      video: '21Af0_6Bv6w',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'Christmas O Holy Night',
      img: Note2,
      url: 'christmas-o-holy-night',
      video: 'aAkMkVFwAoo',
    },
    {
      isOpen: false,
      artist: 'Kotaro Oshio',
      song: 'Merry Christmas Mr Lawrence',
      img: Perenoel,
      url: 'kotaro-oshio-merry-christmas-mr-lawrence',
      video: 'q7Tu68aky4k',
    },
    {
      isOpen: false,
      artist: 'Trans Siberian Orchestra',
      song: 'A Mad Russians Christmas',
      img: Renne,
      url: 'trans-siberian-orchestra-a-mad-russians-christmas',
      video: '6P9xxJ4V7no',
    },
    {
      isOpen: false,
      artist: 'Santa Claus',
      song: 'We Wish You A Merry Christmas',
      img: Vinyle,
      url: 'christmas-we-wish-you-a-merry-christmas',
      video: 'j3fSknbR7Y4',
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
