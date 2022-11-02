import vet from '../src/components/veterinarian.png';
import emp from '../src/components/employee.png';
import logo from '../src/components/logo.png';
import paw from '../src/components/paw.png';
import owner from '../src/components/owner.png';
import admin from '../src/components/admin.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
        <img src={logo} className="logo" alt="logo" />
        <img src={paw} className="paw" alt="paw" />
        <img src={admin} className="picture1" alt="admin" />
        <img src={owner} className="picture2" alt="owner" />
        <img src={emp} className="picture3" alt="emp" />
        <img src={vet} className="picture4" alt="vet" /><br/>
        <Button variant="success" className="button1">ADMIN</Button>
        <Button variant="success" className="button2">CLINIC OWNER</Button>
        <Button variant="success" className="button3">EMPLOYEE</Button>
        <Button variant="success" className="button4">VETERINARIAN</Button>
      
        <a className='select'>Select type of User</a>
  
    </div>
  );
}

export default App;
