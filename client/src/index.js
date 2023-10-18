// Import necessary modules
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import App from './App'; // Import the main component of the application from a local file
import reportWebVitals from './reportWebVitals'; // Import a function for reporting web performance metrics
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS styles

// Create a new React root using concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside a React.StrictMode component
root.render(
  <React.StrictMode>
    <App /> {/* The main component of the application */}
  </React.StrictMode>
);

// Report web performance metrics
reportWebVitals();
