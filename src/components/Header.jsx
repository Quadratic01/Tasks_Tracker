import Button from "./Button"

const Header = ({ onAdd, showAdd }) => {
  const onClick = () => {
    console.log('click')
  } 
  return (
    <header className="Header">
        <h1>Task Tracker</h1>
        <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}/> 
    </header>
  )
}

export default Header