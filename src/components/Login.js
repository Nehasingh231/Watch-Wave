import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    
  const message =  checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);
};

  const toggleSignInForm = () => {
    setSignInForm(!signInForm); // if it is signInForm then change it into signUp form
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="background-image"
        />
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()} 
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>

       {!signInForm && (
        <input
       
        className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        type="text"
        placeholder="Full Name"
      />
       )}
        <input
        ref={email}
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="text"
          placeholder="EmailAddress"
        />
        <input
        ref={password}
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="password"
          placeholder="Password"        
        />
         <p className="text-red-700 font-bold text-lg pt-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {signInForm
            ? "New to Netflix? Sign up Now😊"
            : "Already Registered, Sign In Now😉"}
        </p>
      </form>
    </div>
  );
};
export default Login;
