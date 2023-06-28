import * as amplitude from 'amplitude-js';

const apiKey = window.location.href.includes('intern.dev.nav.no')
    ? '6ed1f00aabc6ced4fd6fcb7fcdc01b30'
    : 'a8243d37808422b4c768d31c88a22ef4';

const client: amplitude.AmplitudeClient = amplitude.getInstance();

if (import.meta.env.PROD) {
    client.init(apiKey, '', {
        apiEndpoint: 'amplitude.nav.no/collect',
        saveEvents: false,
        includeUtm: true,
        batchEvents: false,
        includeReferrer: false,
    });
}

export const sendEvent = (event: string, data?: Object): void => {
    if (import.meta.env.PROD) {
        client.logEvent(event, data);
    }
};
