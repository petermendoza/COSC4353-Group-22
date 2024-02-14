import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Loginpage from './Pages/loginpage';
import ClientProfilePage from './Pages/ClientProfilePage';
import FuelQuoteFormPage from './Pages/FuelQuoteFormPage';
import FuelQuoteHistoryPage from './Pages/FuelQuoteHistoryPage';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element = {<Loginpage />} />
            <Route path = "/loginpage" element = {<Loginpage />} />
            <Route path = "/ClientProfilePage" element = {<ClientProfilePage />} />
            <Route path = "/FuelQuoteFormPage" element = {<FuelQuoteFormPage />} />
            <Route path = "/FuelQuoteHistoryPage" element = {<FuelQuoteHistoryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
