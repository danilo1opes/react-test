<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import Blog from './components/blog/index.jsx';
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Blog from './components/blog/index.jsx'
>>>>>>> 5c01a1b966eebc73e51058834ae3f10a0b5a210b

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>
);
