import React, { Suspense, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

function Contact() {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    // Alert _________________________________________________________________
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = (e) => {
        setCurrentAnimation("walk");
    };
    const handleBlur = (e) => {
        setCurrentAnimation("idle");
    };

    // handleSubmit function will be called when the form is submitted and it will send the email
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setCurrentAnimation("hit");
        setIsLoading(true);

        //! console.log("form", form);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Rahul Yadav",
                    from_email: form.email,
                    to_email: "ryrahu@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setIsLoading(false);
                // TODO: show success message
                //  Show alert______________________________________________________
                showAlert({
                    show: true,
                    text: "Message sent successfully",
                    type: "success",
                });

                setTimeout(() => {
                    // TODO: Hide and alert
                    //  Hide alert______________________________________________________
                    hideAlert();
                    setCurrentAnimation("idle");
                    setForm({ name: "", email: "", message: "" });
                }, 2000);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log("Error", err);
                setCurrentAnimation("sad");
                // TODO: show error message
                showAlert({
                    show: true,
                    text: "Something went wrong",
                    type: "danger",
                });
            });
    };

    // Return ________________________________________________________________________________________________
    return (
        <>
            <section className="flex relative lg:flex-row flex-col max-container h-[100vh] ">
                {alert.show && <Alert {...alert} />}
                {/* <Alert text="adfhasdfadsfasdfakjdsfhakdshfjahsdfadsg" /> */}

                <div className=" min-w-[50%]">
                    <h1 className="head-text">Get in touch</h1>

                    <form
                        action=""
                        className="w-full flex flex-col gap-7 mt-4"
                        onSubmit={handleOnSubmit}
                    >
                        <label
                            htmlFor=""
                            className="font-semibold text-black-500"
                        >
                            Name
                            <input
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Rahul"
                                required
                                value={form.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label
                            htmlFor=""
                            className="font-semibold text-black-500"
                        >
                            Email
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="ryrahul12345@gmail.com"
                                required
                                value={form.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label
                            htmlFor=""
                            className="font-semibold text-black-500"
                        >
                            Your Message
                            <textarea
                                rows={4}
                                name="message"
                                className="textarea"
                                placeholder="Let me know how can I help you"
                                required
                                value={form.message}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                    <Canvas
                        camera={{
                            position: [0, 0, 5],
                            fov: 75,
                            near: 0.1,
                            far: 1000,
                        }}
                    >
                        <directionalLight
                            intensity={2.5}
                            position={[0, 0, 1]}
                        />
                        <ambientLight intensity={0.3} />
                        <Suspense fallback={<Loader />}>
                            <Fox
                                currentAnimation={currentAnimation}
                                position={[0.5, 0.35, 0]}
                                rotation={[12.6, -0.8, 0]}
                                scale={[0.6, 0.6, 0.6]}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </section>
        </>
    );
}

export default Contact;
