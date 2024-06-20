const base_url = window.location.origin;
const API_POINT = `${base_url}/ailabs/api/`;
// ('https://labs.aipathlabs.in/ailabs/api/ailab/v1/checkuser');

export const auth = {
  Token:
    'https://labs.aipathlabs.in/auth/realms/AILABS/protocol/openid-connect/token',
  checkuser: `${API_POINT}ailab/v1/checkuser`,
};
