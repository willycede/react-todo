function TodoIcon({ type, onClick }) {
  return (
    <span className="material-icons" onClick={onClick}>
      {type}
    </span>
  );
}