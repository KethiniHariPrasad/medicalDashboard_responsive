import axios from 'axios';
import { auth } from './apiUrl';

const headers = {
  Authorization: `Bearer ${localStorage.Token}`,
};

// Token Api
export const gettokendata = async () => {
  try {
    let clientSecret;
    clientSecret = 'Yo8A6fldQ51QgJs0fiBza1VDWj1Q56Fh';

    const requestData = {
      client_id: 'ailabs',
      client_secret: clientSecret,
      grant_type: 'password',
      username: 'pathlab',
      password: 'welcome',
    };

    const response = await axios.post(
      auth.Token,
      new URLSearchParams(requestData),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = response.data.access_token;

    localStorage.setItem('Token', accessToken);

    return accessToken;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};

export const API_CALLS = {
  callCheckUser: async function (payload) {
    return await axios.post(auth.checkuser, payload, { headers });
  },
};
