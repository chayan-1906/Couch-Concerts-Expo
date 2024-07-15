import getCurrentUser from "./getCurrentUser";

async function buildHeader() {
    let currentUser = await getCurrentUser();

    if (currentUser.authToken) {
        return {
            'x-auth-token': currentUser.authToken,
            'Content-Type': 'application/json',
            'Charset': 'UTF-8',
        };
    }
}

export default buildHeader;
