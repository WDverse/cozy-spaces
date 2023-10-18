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
          ></svg>
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
