import React from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="grid items-center justify-center min-h-screen grid-cols-2 bg-white dark:bg-slate-900 max-lg:flex">
      <LoginForm />
      <Image
        className="object-cover w-full h-screen max-lg:hidden"
        src="/assets/auth-image.jpg"
        alt="sample-image"
        width="0"
        height="0"
        sizes="100"
      />    
    </div>
  );
};

export default Login;
