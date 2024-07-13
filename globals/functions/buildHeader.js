function buildHeader(authToken) {
    // printInConsole(`loggedIn: ${loggedIn}`);

    if (authToken) {
        return {
            'x-auth-token': /*fetchFromLocalStorage('authToken') || */authToken,
            'Content-Type': 'application/json',
            'Charset': 'UTF-8',
        }
    }
}

export default buildHeader;
