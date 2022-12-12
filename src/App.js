import logo from './logo.svg';
import './App.css';
import componentA from './components/componentA';

function App() {
  const contactprueba = {
    name: "Oscar",
    lastname: "Lindo",
    email: "lindooscar635@gmail.com",
    online: false,
  };
  return(
    <div className='App'>
      <header className='App-header'>
      <componentA contact={contactprueba}></componentA>
      </header>
    </div>
  );
}

export default App;
