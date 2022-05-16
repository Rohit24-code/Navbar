import logo from './logo.svg';
import './App.css';
import './styles/Nav.css'
import Logo  from './components/Logo';
import Button from './components/Button'
import Links from './components/Links'

let arr=["Servies","Projects","About"]

function App() {
  return (
    <>
    <div className='Nav' >
      <Logo from="LOGOBAKERY"/>
    <Links iterate={arr}/>
      <Button btn="contact"/>
     
    </div>
    </>
  );
}

export default App;
