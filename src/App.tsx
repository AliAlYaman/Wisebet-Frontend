import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import { lazy, Suspense } from 'react';

// Lazy load your pages
const Main = lazy(() => import('./layouts/MainLayout'));
const Index = lazy(() => import('./pages/MainPage'));
const Live = lazy(() => import('./pages/LivePage'));
const Login = lazy(() => import('./pages/LoginPage'));
const Casino = lazy(() => import('./pages/CasinoPage'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const VerifyEmail = lazy(() => import('./pages/VerifyEmailPage'));

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Index />} />
            <Route path="/live" element={<Live />} />
            <Route path="/casino" element={<Casino />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/email-verification' element={<VerifyEmail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;