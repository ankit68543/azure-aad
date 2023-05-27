export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: 'fda7ce73-ab0b-458e-a0a8-f5e22608a768',
            authority: 'https://login.microsoftonline.com/c60121a4-b833-419a-b94b-2189095e7c15',
            clientSecret:"500e222e-ea78-4627-a5d0-6f5f3084a68a"
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
