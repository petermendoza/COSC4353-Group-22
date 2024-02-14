
import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import ClientProfile from './Components/ClientProfile/ClientProfile';
import Loginpage from './Components/Loginpage/loginpage';

function App() {
  return (
      <div className="App">
        <Loginpage />
        <Routes>
          <Route path = "/ClientProfile" element = {<ClientProfile />} /> 
        </Routes>
      </div>
  );
}

export default App;
