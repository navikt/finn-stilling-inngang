import { BodyLong, BodyShort, Heading, Label } from '@navikt/ds-react';
import { CheckmarkCircleIcon } from '@navikt/aksel-icons';
import LinkButton from '../link-button/LinkButton';
import Illustrasjon from '../illustrasjon/Illustrasjon';
import css from './App.module.css';

type Props = {
    fnr: string;
};

const App = ({ fnr }: Props) => {
    return (
        <div className={css.app}>
            <div className={css.boks}>
                <article className={css.venstre}>
                    <Heading spacing level="2" size="large">
                        Finn stillinger til brukeren din
                    </Heading>

                    <BodyLong spacing>
                        Vi har flere stillinger fra arbeidsgivere som ønsker å ansette folk fra NAV.
                        Kanskje passer noen av disse stillingene til folkene du veileder?
                    </BodyLong>

                    <BodyLong spacing>
                        Vi utforsker om det er interessant for deg å få vite om det, og hvordan vi
                        kan lage det på riktig måte. Da trenger vi din hjelp.
                    </BodyLong>

                    <BodyLong spacing>
                        Test ut hvordan det kan fungere ved å trykke på knappen under. Gi oss gjerne
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
                        Tilbakemeldingene bruker vi til å vurdere hva vi gjør videre
                    </BodyLong>

                    <ul className={css.punktliste}>
                        <BodyShort as="li">
                            <CheckmarkCircleIcon />
                            Det tar bare 2 minutter å svare
                        </BodyShort>
                        <BodyShort as="li">
                            <CheckmarkCircleIcon />
                            Er helt anonymt, selvfølgelig
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
    const rekrutteringsbistandUrl = window.location.href.includes('dev.nav.no')
        ? 'https://rekrutteringsbistand.intern.dev.nav.no'
        : 'https://rekrutteringsbistand.intern.nav.no';

    return `${rekrutteringsbistandUrl}/stillingssok/${fnr}?kandidatkriterier`;
}

export default App;
