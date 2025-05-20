import { BodyLong, Heading } from '@navikt/ds-react';
import { useEffect } from 'react';
import { sendEvent } from '../amplitude';
import Illustrasjon from '../illustrasjon/Illustrasjon';
import LinkButton from '../link-button/LinkButton';
import css from './App.module.css';

type Props = {
    fnr: string;
};

const App = ({ fnr }: Props) => {
    useEffect(() => {
        sendEvent('aktivitetsplan-finn_stilling_fane-vis');
    }, []);

    return (
        <div className={css.app}>
            <div className={css.boks}>
                <article className={css.artikkel}>
                    <Heading spacing level='2' size='large'>
                        Finn stillinger til brukeren din
                    </Heading>

                    <BodyLong spacing>
                        Vi har flere stillinger fra arbeidsgivere som ønsker å ansette folk fra NAV.
                        Kanskje passer noen til folkene du veileder?
                    </BodyLong>

                    <div>
                        <LinkButton href={hentLenkeTilFinnStilling(fnr)}>Se stillingene</LinkButton>
                    </div>
                    <div>
                        <Illustrasjon />
                    </div>
                </article>
            </div>
        </div>
    );
};

function hentLenkeTilFinnStilling(fnr: string) {
    if (window.location.href.includes('dev.nav.no')) {
        return `https://rekrutteringsbistand-frontend.intern.dev.nav.no/personbruker`;
    } else {
        return `https://rekrutteringsbistand-frontend.intern.nav.no/personbruker`;
    }
}

export default App;
