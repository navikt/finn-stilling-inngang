import { createRoot } from 'react-dom/client';
import '@navikt/ds-css';
import { BodyShort } from '@navikt/ds-react';
import Navspa from '@navikt/navspa';

const App = () => <BodyShort>Heihei</BodyShort>;

if (import.meta.env.VITE_EXPORT) {
    Navspa.eksporter('finn-stilling-inngang', App);
} else {
    const utviklingsapp = document.getElementById('finn-stilling-inngang');
    const root = createRoot(utviklingsapp!);

    root.render(<App />);
}
