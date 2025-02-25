import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalendarPage from './pages/master/CalendarPage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalendarPage />
  </StrictMode>
)
