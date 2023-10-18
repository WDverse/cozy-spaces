import decode from 'jwt-decode';

// Define a class called AuthService
class AuthService {
  // Method to get the user's profile from the decoded token
  getProfile() {
    return decode(this.getToken());
  }

  // Method to check if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Method to check if a token is expired
  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // If the token is expired, remove it from local storage
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  // Method to get the token from local storage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Method to log in the user
  login(idToken) {
    // Store the token in local storage
    localStorage.setItem('id_token', idToken);
    // Redirect the user to the '/' page when logged in
    window.location.assign('/');
  }

  // Method to log out the user
  logout() {
    // Remove the token from local storage
    localStorage.removeItem('id_token');
    // Redirect the user to the '/' page when logged out
    window.location.assign('/');
  }
}

// Export an instance of the AuthService class
export default new AuthService();
