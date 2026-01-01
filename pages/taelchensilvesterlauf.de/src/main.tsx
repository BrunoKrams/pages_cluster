import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Aktuelles from './pages/Aktuelles'
import Ergebnisse from './pages/Results.tsx'
import GalleryPage from './pages/GalleryPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Navigate to="/aktuelles" replace />} />
          <Route path="aktuelles" element={<Aktuelles />} />
          <Route path="ergebnisse" element={<Ergebnisse />} />
          <Route path="gallerie" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
