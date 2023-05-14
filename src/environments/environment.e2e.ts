export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: 'ENTER_CLIENT_ID',
            authority: 'https://login.windows-ppe.net/ENTER_AUTHORITY'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft-ppe.com/v1.0/me'
    }
};
