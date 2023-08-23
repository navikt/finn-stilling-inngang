import { CheckmarkCircleIcon } from '@navikt/aksel-icons';
import { BodyLong, BodyShort, Heading, Label } from '@navikt/ds-react';
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
                <article className={css.venstre}>
                    <Heading spacing level="2" size="large">
                        Finn stillinger til brukeren din
                    </Heading>

                    <BodyLong spacing>
                        Vi har flere stillinger fra arbeidsgivere som ønsker å ansette folk fra NAV.
                        Kanskje passer noen til folkene du veileder?
                    </BodyLong>
                    <BodyLong spacing>
                        Vi utforsker om det er interessant for deg å få vite om disse. Kanskje du
                        også vil anbefale brukeren din til jobben?
                    </BodyLong>
                    <BodyLong spacing>
                        Du kan teste løsningen ved å trykke på knappen under. Gi oss gjerne
                        tilbakemeldinger hvis du har lyst. Det setter vi pris på.
                    </BodyLong>

                    <div className={css.lenker}>
                        <LinkButton href={hentLenkeTilFinnStilling(fnr)}>Se stillingene</LinkButton>
                        <LinkButton
                            variant="secondary"
                            href="https://forms.office.com/e/yY5pEPgBpa"
                        >
                            Gi oss tilbakemelding
                        </LinkButton>
                    </div>

                    <BodyLong>
                        Tilbakemeldingene bruker vi til å vurdere hva vi gjør videre.
                    </BodyLong>

                    <ul className={css.punktliste}>
                        <BodyShort as="li">
                            <CheckmarkCircleIcon />
                            Det tar bare 2-3 minutter å svare.
                        </BodyShort>
                        <BodyShort as="li">
                            <CheckmarkCircleIcon />
                            Er helt anonymt, selvfølgelig.
                        </BodyShort>
                    </ul>

                    <Label as="p">Tusen takk for hjelpen!</Label>
                </article>
                <div className={css.hoyre}>
                    <Illustrasjon />
                </div>
            </div>
        </div>
    );
};

function hentLenkeTilFinnStilling(fnr: string) {
    if (window.location.href.includes('dev.nav.no')) {
        return `https://rekrutteringsbistand.intern.dev.nav.no/stillingssok/personbruker`;
    } else {
        return `https://rekrutteringsbistand.intern.nav.no/stillingssok/personbruker`;
    }
}

export default App;
