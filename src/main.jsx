import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App.jsx";
import './styles/index.scss'
import '@a1rth/css-normalize'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
