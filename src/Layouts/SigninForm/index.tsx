import Button from "../../components/Button";
import Input from "../../components/Input";
import githublogo from "../../assets/github-icon-1.svg";
import googlelogo from "../../assets/google-g-2015.svg";
import { Link } from "react-router-dom";
import { inputType } from "./InputType";
import React, { useState } from "react";

const SigninForm = () => {
  const [input, setInput] = useState<inputType>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-xs">
      <h2 className="text-2xl font-bold my-2 text-violet-500 text-center">
        Login
      </h2>
      <p className="font-light text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        exercitationem.
      </p>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="example@gmail.com"
          value={input.email}
          onChange={handleChange}
        >
          Email :
        </Input>
        <Input
          type="password"
          name="password"
          placeholder="******"
          value={input.password}
          onChange={handleChange}
        >
          Password :
        </Input>

        <Button type="submit" customcss={"w-full"}>
          Submit
        </Button>
      </form>

      <p className="text-center text-slate-400 font-semibold my-6">Or</p>

      <div className="mt-6 flex justify-center">
        <img
          src={githublogo}
          alt="githublogo"
          className="border rounded-md p-2 cursor-pointer"
        />
        <img
          src={googlelogo}
          alt="googlelogo"
          className="border rounded-md p-2 mx-2 cursor-pointer"
        />
      </div>

      <p className="text-center my-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 font-semibold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
