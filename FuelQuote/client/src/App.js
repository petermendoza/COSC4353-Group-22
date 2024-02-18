import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ClientProfilePage from './Pages/ClientProfilePage';
import FuelQuoteFormPage from './Pages/FuelQuoteFormPage';
import FuelQuoteHistoryPage from './Pages/FuelQuoteHistoryPage';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element = {<LoginPage />} />
            <Route path = "/LoginPage" element = {<LoginPage />} />
            <Route path = "/ClientProfilePage" element = {<ClientProfilePage />} />
            <Route path = "/FuelQuoteFormPage" element = {<FuelQuoteFormPage />} />
            <Route path = "/FuelQuoteHistoryPage" element = {<FuelQuoteHistoryPage />} />
            <Route path = "/RegisterPage" element = {<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
