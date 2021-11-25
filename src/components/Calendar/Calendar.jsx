import { useState, useEffect } from 'react';
import Door from '../Door/Door';
import './Calendar.css';

export default function Calendar() {
  const [doors, setDoors] = useState([]);
  const initDoors = [
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Bar' },
    { isOpen: false, text: 'Baz' },
    { isOpen: false, text: 'Foobar' },
    { isOpen: false, text: 'Lorem' },
    { isOpen: false, text: 'ipsum' },
    { isOpen: false, text: 'dolor' },
    { isOpen: false, text: 'sit' },
    { isOpen: false, text: 'hello' },
    { isOpen: false, text: 'world' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Bar' },
    { isOpen: false, text: 'Baz' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
    { isOpen: false, text: 'Foo' },
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
