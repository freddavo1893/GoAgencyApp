import axios from 'axios';

const BASE_URL = 'URL_BACKEND';

const login_auth = async (password) => {
  
  try {
    console.log(password)
    const response = await axios.post(`${BASE_URL}/login`, {
      password: password,
      
    });

    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export { login_auth };