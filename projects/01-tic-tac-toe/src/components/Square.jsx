export const Square = ({ children, updateBoard, index, isSelected }) => {
  
  const customClass = `square ${isSelected ? 'is-selected' : ''}`;
  
  const handleClick = () => {
    updateBoard(index);
  }
  
  return (
    <div onClick={handleClick} className={customClass}>
      {children}
    </div>
  )
}