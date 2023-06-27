import { createRoot } from 'react-dom/client';
import Navspa from '@navikt/navspa';
import App from './app/App';
import './index.css';

const appName = 'finn-stilling-inngang';

if (import.meta.env.VITE_EXPORT) {
    Navspa.eksporter(appName, App);
} else {
    const utviklingsapp = document.getElementById(appName);
    const root = createRoot(utviklingsapp!);

    root.render(<App fnr="123" />);
}
