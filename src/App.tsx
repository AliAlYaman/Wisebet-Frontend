import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/MainPage";
import LivePage from "./pages/LivePage";
import CasinoPage from "./pages/CasinoPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/casino" element={<CasinoPage />} />
      </Route>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;