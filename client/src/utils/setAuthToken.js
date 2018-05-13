import axios from 'axios';

const setAuthToken = token => {
  if(token) {
    // If token exist apply it to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // If no token, delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;