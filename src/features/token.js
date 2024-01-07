const Token = {
  getToken() {
    return localStorage.getItem('tt');
  },
  saveToken(token) {
    localStorage.setItem('tt', token);
  },
  removeToken() {
    localStorage.removeItem('tt');
  },
};

export default Token;