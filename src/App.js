import vet from '../src/components/veterinarian.png';
import emp from '../src/components/employee.png';
import logo from '../src/components/logo.png';
import paw from '../src/components/paw.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
        <img src={logo} className="logo" alt="logo" />
        <img src={paw} className="paw" alt="paw" />
        <img src={vet} className="picture" alt="vet" />
        <img src={emp} className="picture" alt="emp" /><br/>
        <Button variant="success" className="button1">VETERINARIAN</Button>
        <Button variant="success" className="button2">EMPLOYEE</Button><br/>
      
        <a className='select'>Select type of User</a>
  
    </div>
  );
}

export default App;
