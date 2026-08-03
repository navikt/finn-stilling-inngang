import { BodyLong, Box, Button, Heading } from '@navikt/ds-react';
import Illustrasjon from '../illustrasjon/Illustrasjon';
import css from './App.module.css';
import { ExternalLinkIcon } from '@navikt/aksel-icons';

type Props = {
    fnr: string;
};

const App = ({ fnr }: Props) => {
    return (
        <div className={css.app}>
            <Box className={css.boks}>
                <article className={css.artikkel}>
                    <Heading spacing level='2' size='large'>
                        Finn stillinger til brukeren din
                    </Heading>

                    <BodyLong spacing>
                        Vi har flere stillinger fra arbeidsgivere som ønsker å ansette folk fra Nav.
                        Kanskje passer noen til folkene du veileder?
                    </BodyLong>
                    <Button
                        as='a'
                        href={hentLenkeTilFinnStilling(fnr)}
                        icon={<ExternalLinkIcon />}
                        iconPosition={'right'}
                        target='_blank'
                    >
                        Se stillingene
                    </Button>
                    <Illustrasjon />
                </article>
            </Box>
        </div>
    );
};

function hentLenkeTilFinnStilling(fnr: string) {
    if (window.location.href.includes('dev.nav.no')) {
        return `https://rekrutteringsbistand.intern.dev.nav.no/personbruker`;
    } else {
        return `https://rekrutteringsbistand.intern.nav.no/personbruker`;
    }
}

export default App;
