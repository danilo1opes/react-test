import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Blog from './components/blog/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)
