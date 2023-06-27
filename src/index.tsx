import { createRoot } from 'react-dom/client';
import Navspa from '@navikt/navspa';
import App from './app/App';
import './index.css';

const elementId = 'finn-stilling-inngang';

if (import.meta.env.VITE_EXPORT) {
    Navspa.eksporter(elementId, App);
} else {
    const utviklingsapp = document.getElementById(elementId);
    const root = createRoot(utviklingsapp!);

    root.render(<App fnr="123" />);
}
