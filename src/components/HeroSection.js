// type rfce to pre-fill
import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/trvl-website/videos/video-2.mp4" autoPlay loop muted />
      <h1> ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
