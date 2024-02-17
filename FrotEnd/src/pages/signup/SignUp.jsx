import React from "react";
import GenderCheckbox from "./GenderCheckbox.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-black-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-green-500"> Uni Chat</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full h-10"
            />
          </div>

          {/* Gender  Checkbox goes here*/}
          <GenderCheckbox />

          <div className="p-2">
            <a href="#" className="link link-info text-gray-200">
              Already have an account?
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
