function Card({ name, onClick }) {
  return (
    <div className='card'>
      <img src={name} alt={`card-${name}`} onClick={onClick} />
    </div>
  );
}

export { Card };
