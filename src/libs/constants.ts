const production: boolean = process.env.PRODUCTION === "true";
export const API_URL = (production) ? "https://api.bitspace.org.in" : "http://localhost:6969"

export const CLIENT_URL = (production) ? "https://bitspace.org.in" : "http://localhost:3000"

export const GITHUB_OAUTH_REDIRECT_URL = CLIENT_URL + "/api/auth/callback"

export const GITHUB_OAUTH_AUTH_URL = "https://github.com/login/oauth/authorize";

export const GITHUB_OAUTH_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
export const GITHUB_SCOPE = "admin:user";
