export default function Door(item) {
  const { num, text, isOpen, total, open } = item;
  return (
    <div className={isOpen ? 'Door open' : 'Door'}>
      <input
        type="button"
        onClick={() => {
          open(num);
        }}
      />
      {isOpen ? text : `${num + 1}/${total}`}
    </div>
  );
}
