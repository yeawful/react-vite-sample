import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App/App';
import './styles/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
