import Door from '../Door/Door';

export default function Calendar() {
  const doors = [
    { text: 'Foo' },
    { text: 'Bar' },
    { text: 'Baz' },
    { text: 'Foobar' },
    { text: 'Lorem' },
    { text: 'ipsum' },
    { text: 'dolor' },
    { text: 'sit' },
    { text: 'hello' },
    { text: 'world' },
    { text: 'Foo' },
    { text: 'Bar' },
    { text: 'Baz' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
    { text: 'Foo' },
  ];
  return (
    <ul>
      {doors
        .map((item, index, arr) => ({
          ...item,
          num: index + 1,
          isOpen: false,
          total: arr.length,
          rand: Math.random(),
        }))
        .sort((a, b) => a.rand - b.rand)
        .map((item) => (
          <li key={item.index}>
            <Door {...item} />
          </li>
        ))}
    </ul>
  );
}
