
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Crud_unicorns from './pages/Crud_unicorns';
import Currency from "./pages/Currency_view";
import Weather from "./pages/Weather";
function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="crud_unicorns" element={<Crud_unicorns />} />
          <Route path="currency" element={<Currency />} />
          <Route path="weather" element={<Weather />} />
          <Route path="*" element={<Layout />} />
        </Route> 
     </Routes>
    </div>
  );
}

export default App;
