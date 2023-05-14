export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: 'ENTER_CLIENT_ID',
            authority: 'https://login.microsoftonline.com/ENTER_AUTHORITY'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
