// Import necessary dependencies and styles for the Home component
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles/Home.css";

// Define the Home component as a functional component
export default function Home() {
  // Create a reference to the main container element
  const about = useRef(null);

  // Create a timeline for animations using gsap
  const tl = gsap.timeline();

  // Use the useEffect hook for animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the h2 elements inside the main container
      tl.from(".main h2", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
      });
    }, about);

    // Revert the animation context when the component unmounts
    return () => ctx.revert();
  }, [tl]);

  return (
    <div className="main" ref={about}>
      <h1 className="logo">
        <span className="icon">
          {/* SVG icon for the logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            className="bi bi-house-heart"
            viewBox="0 0 16 16"
          >
            <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
        </span>
        Cozy Spaces
      </h1>

      <h2>Experience</h2>
      <h2>
        Comfort
        {/* Link to the "/spaces" route on click */}
        <Link to="/spaces">
          <Button className="button" type="button" value="Input">
            Reserve Now
          </Button>
        </Link>
        Beyond
      </h2>
      <h2>Imagination</h2>
    </div>
  );
}
