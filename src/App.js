
import './App.css';
import Person from './Person';
import Header from './Header';
import List from './List';
import Button from './Button';
function App() {
  const handleClick = () =>{
    alert('Button is Clicked !');
  };
  const listItems = ['item1', 'item2', 'item3', 'item4'];
  return (
    <div className="App">
      <Person name = "Rizwan" age = "22"/>
      <Button text = "this is button" onClick = {handleClick}/>
      <Header title = "this is my title"/>

      <List items = {listItems} />
    </div>
  );
}

export default App;
