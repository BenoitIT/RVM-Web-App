import React, { FC, useState } from "react";
import MainImage from "../assets/images/_rvm.jpeg";
import FormField from "../components/forms/formFields";

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading] = useState<boolean>(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="min-h-screen w-screen grid grid-cols-1 md:grid grid-cols-2 lg:grid-cols-2 duration-100 bg-lime-800">
      <div className="w-full h-full flex justify-center items-center duration-100">
        <form
          className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-col gap-6 duration-100"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-bold">Sign in 👋</h1>
          <h2>
            To manage your RVM machines.kindly fill the fields below your
            credentials
          </h2>
          <FormField
            name="email"
            type="email"
            value={email}
            grabValue={setEmail}
            placeholder="peterdoe@gmail.com"
          />
          <FormField
            name="password"
            type="password"
            placeholder="**********"
            value={password}
            grabValue={setPassword}
          />
          <div className="flex justify-between">
            <a href="/auth/signup" className="text-white">
              Create account
            </a>
            <a href="/auth/forgot" className="text-red-400">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="bg-white text-lime-800 w-full py-3 rounded-md cursor-pointer hover:scale-[1.02] active:scale-[0.99] duration-75"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
      <div className="w-full h-full hidden md:flex  bg-lime-800  justify-center items-center duration-100">
        <img
          src={MainImage}
          className=" hidden md:block h-[60%] rounded-md shadow-md xl:h-[80%] w-[80%] duration-100"
        />
      </div>
    </div>
  );
};

export default LoginPage;
