import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css"
export default function Landing() {
  const about = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".main h1", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
      });

      tl.from(".main>img", {
        scale: 0,
        opacity: 0,
        stagger: 0.6,
      });
      tl.from("h5", {
        scale: 0,
        opacity: 0,
      });
      tl.to("h5", {
        y: 30,
        repeat: -1,
        duration: 0.7,
        yoyo: true,
      });
    }, about);

    return () => ctx.revert();
  }, []);
  return (
    <div className="main" ref={about}>
      <h1>Experience </h1>
      <h1>
        {" "}
        Luxury
        <Link to="/spaces">
          <button>Reserve Now</button>
        </Link>{" "}
        Beyond
      </h1>
      <h1>Imagination </h1>
      <img
        className="left-img"
        src="https://images.unsplash.com/photo-1694612114830-f8fb3646f33e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91cmlzdCUyMGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <img
        className="right-img"
        src="https://images.unsplash.com/photo-1649604340292-59b2d63d9377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzdCUyMGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      {/* <img className="top-img" src="https://images.unsplash.com/photo-1492294112339-ea831887e5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRvdXJpc3QlMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" /> */}
      <img
        className="bottom-img"
        src="https://images.unsplash.com/photo-1542576329-818ff4ffda3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRvdXJpc3QlMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}
