import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg"; 
import { projects } from "../constants/index";
import CTA from "../components/CTA";
function Projects() {
    return (
        <section className="max-container">
            <h1 className="head-text">
                My
                <span className="blue-gradient_text font-semibold drop-shadow">
                    Projects
                </span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    skilled Software Engineer hailing from India, specializing
                    With a comprehensive skill set that encompasses both
                    front-end and back-end development.{" "}
                </p>
            </div>

            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="w-full lg:w-[400px]" key={project.name}>
                        <div className="block-container h-12 w-12">
                            <div
                                className={`btn-back rounded-xl ${project.theme}`}
                            />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={project.iconUrl}
                                    alt="Project"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                            <p className="mt-2 text-slate-500">{project.description}</p>
                            <div className="mt-5 font-poppins flex gap-2 items-center"> 
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600"
                                >Link</Link>
                                <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-slate-200" />
            <CTA />
        </section>
    );
}

export default Projects;
