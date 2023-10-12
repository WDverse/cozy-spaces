import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => { // creates react component for the footer
  const location = useLocation();
  const navigate = useNavigate();
  return ( //returns html components
    <footer className="w-100 mt-auto bg-white p-4">
      <div className="container text-center mb-2">
        {location.pathname !== "/" && (
          <>
            <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
              </span>{" "}
              Go Back
            </button>
            <h4>© 2023 The Cozy Coders</h4>
          </>
        )}
      </div>
    </footer>
  );
};
// Export the Footer component as the default export of this module
export default Footer;
