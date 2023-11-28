export const Action = ({ handleClick, type, className }) => (
  <button className={className} onClick={handleClick}>
    {type}
  </button>
);
