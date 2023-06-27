import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { Label } from '@navikt/ds-react';
import { ReactNode } from 'react';
import css from './LinkButton.module.css';

type Props = {
    href: string;
    children: ReactNode;
    variant?: string;
};

const LinkButton = ({ href, children, variant = 'primary' }: Props) => {
    const className =
        css.linkButton + ' navds-button navds-button-medium ' + `navds-button--${variant}`;

    return (
        <a target="_blank" href={href} className={className}>
            <Label as="span">{children}</Label>
            <ExternalLinkIcon />
        </a>
    );
};

export default LinkButton;
