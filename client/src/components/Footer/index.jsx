// Import necessary dependencies from React and React Router DOM
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import styles for the Footer component
import "../../styles/Footer.css";

// Define the Footer component as a functional component
const Footer = () => {
  // Access the current route's location using useLocation
  const location = useLocation();

  // Access the navigation function using useNavigate
  const navigate = useNavigate();

  return (
    <>
      {/* Render the footer only when the current route is not the root ('/') */}
      {location.pathname !== "/" && (
        <footer className="w-100 mt-auto bg-white p-4">
          <div className="container text-center mb-2">
            {/* Button to navigate back in the browser's history */}
            <button className="btn btn-dark mb-3 footerBtn" onClick={() => navigate(-1)}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                  />
                </svg>
              </span>{" "}
              Go Back
            </button>
            <h4>© 2023 The Cozy Coders</h4>
          </div>
        </footer>
      )}
    </>
  );
};

// Export the Footer component as the default export
export default Footer;
