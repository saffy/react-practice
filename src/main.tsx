import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx';
import { createRoot } from 'react-dom/client';

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
