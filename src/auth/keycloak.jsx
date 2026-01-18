import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "pet-shop",
    clientId: "pet-shop",
});

let initialized = false;

export const initKeycloak = () => {
    if (initialized) {
        return Promise.resolve(keycloak.authenticated);
    }

    initialized = true;

    return keycloak.init({
        onLoad: "login-required",
        checkLoginIframe: false,
    });
};

export default keycloak;