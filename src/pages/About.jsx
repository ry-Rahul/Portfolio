import React from "react";
import { skills } from "../constants";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

function About() {
    return (
        <>
            <section className="max-container">
                <h1 className="head-text">
                    Hello, I'm
                    <span className="blue-gradient_text font-semibold drop-shadow">
                        Rahul
                    </span>
                </h1>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        skilled Software Engineer hailing from India,
                        specializing With a comprehensive skill set that
                        encompasses both front-end and back-end development.{" "}
                    </p>
                </div>
                <div className="py-10 flex flex-col">
                    <h3 className="subhead-text">My skills</h3>

                    <div className="flex mt-16 flex-wrap gap-12">
                        {skills.map((skill) => (
                            <div className="block-container h-12 w-12 lg:h-20 lg:w-20">
                                <div className="btn-back rounded-xl" />
                                <div className="btn-front rounded-xl flex justify-center  items-center">
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className="object-contain w-1/2 h-1/2"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-16">
                    <h3 className="subhead-text"> Work Experience</h3>
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        <p>
                            Passionate about programming with a strong
                            foundation in Java, C, C++, JavaScript ,TypeScript ,Python. Although I
                            currently lack formal work experience, my enthusiasm
                            and commitment to continuous learning are evident
                            through my projects. Eager to apply and expand my
                            skills in a professional setting to contribute
                            effectively to a dynamic team.
                        </p>
                    </div>
                </div>

                <div>
                    <hr className="border border-slate-200" />
                </div>
                <CTA /> 
            </section>
        </>
    );
}

export default About;
