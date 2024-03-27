import './Style/App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ClientProfilePageEdit from './Pages/ClientProfilePageEdit';
import ClientProfilePage from './Pages/ClientProfilePage';
import FuelQuoteFormPage from './Pages/FuelQuoteFormPage';
import FuelQuoteHistoryPage from './Pages/FuelQuoteHistoryPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element = {<LoginPage />} />
          <Route path = "/LoginPage" element = {<LoginPage />} />
          <Route path = "/Profile/Edit" element = {<ClientProfilePageEdit />} />
          <Route path = "/Profile" element = {<ClientProfilePage />} />
          <Route path = "/FuelQuoteFormPage" element = {<FuelQuoteFormPage />} />
          <Route path = "/FuelQuoteHistoryPage" element = {<FuelQuoteHistoryPage />} />
          <Route path = "/RegisterPage" element = {<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
