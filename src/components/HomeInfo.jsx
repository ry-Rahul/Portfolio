import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className="info-box">
            <p className="font-medium text-center sm:text-xl"> {text}</p>
            <Link to={link} className="neo-brutalism-white neo-btn">
                {btnText} <img src={arrow} alt="arrow" />
            </Link>
        </div>
    );
};

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue text-white py-4 px-8 mx-5">
            Hi, I am <span className="font-semibold">Rahul</span>👋 <br />A
            software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox
            text="I am a skilled developer actively seeking new opportunities to contribute my expertise.If you have any openings that align with my skills I would be thrilled to discuss how I can bring value to your team. Looking forward to the possibility of working together."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="I have successfully completed several intriguing projects, Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Whether you're in need of a project completion or on the lookout for a skilled developer, I'm just a few keystrokes away."
            link="/contact"
            btnText="Let's talk"
        />
    ),
};
function HomeInfo({ currentStage }) {
    return renderContent[currentStage] || null;
}

export default HomeInfo;
