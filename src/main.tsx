import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'
import { CV } from './CV/CV'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CV />
  </StrictMode>,
)
