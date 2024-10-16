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
          onClick={() => window.scrollTo(0, 0)}
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => window.scrollTo(0, 0)}
        >
          WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
        </Button>
      </div>
      <h4 className="scroll">SCROLL DOWN FOR MORE!</h4>
    </div>
  );
}

export default HeroSection;
