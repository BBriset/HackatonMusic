import './Door.css';

export default function Door(item) {
  const { num, text, isOpen, open } = item;
  return (
    <div className={isOpen ? 'Door open' : 'Door'}>
      <input
        className="openInput"
        type="button"
        onClick={() => {
          open(num);
        }}
      />
      {isOpen ? text : `${num + 1}`}
    </div>
  );
}
