/**
 * The const BASE_URL use the .env file that provider the public API URL "https://mafaldaholthe-api.herokuapp.com"
 */
export const BASE_URL = process.env.REACT_APP_BASE_URL;
/**
 * The const TOKEN_PATH provide the endpoint used to post API with the user data  
 */
export const TOKEN_PATH = "/auth/local";