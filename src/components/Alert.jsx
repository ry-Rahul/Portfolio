import React from "react";

function Alert({ type, text }) {
    return (
        <div className="absolute top-10  left-0 right-0 flex justify-center items-center">
            <div
                className={`${
                    type == "danger" ? "bg-red-800" : "bg-green-800"
                } p-2 text-indigo-100 leading-0 lg:rounded-md flex lf:inline-flex rounded-md`}
                role="alert"
            >
                <p
                    className={`${
                        type == "danger" ? "bg-red-500" : "bg-green-500"
                    } text-xs flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}
                >
                    {type === "danger" ? "failed" : "success"}
                </p>
                <p className="mr-2 text-left flex items-center text-sm ">{text}</p>
            </div>
        </div>
    );
}

export default Alert;
