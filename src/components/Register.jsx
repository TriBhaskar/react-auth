import { useInput } from "../hooks/useInput";
import {
  isEmail,
  isEqualsToOtherValue,
  isNameValid,
  isNotEmpty,
  isPasswordValid,
} from "../util/validation";

export default function Register() {
  //validation stuff
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => isPasswordValid(value) && isNotEmpty(value));

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
  } = useInput("", (value) => isNameValid(value) && isNotEmpty(value));

  const {
    value: cpasswordValue,
    handleInputChange: handleCPasswordChange,
    handleInputBlur: handleCPasswordBlur,
    hasError: cpasswordHasError,
  } = useInput(
    "",
    (value) => isEqualsToOtherValue(value, passwordValue) && isNotEmpty(value)
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }
  return (
    <div className="basis-2/5 p-10 font-semibold">
      <h1 className="text-justify text-2xl font-bold">Register</h1>
      <hr className="mt-2 border-solid border-2 border-slate-200 rounded-lg" />
      <form className="mt-4" onSubmit={handleSubmit}>
        <h2 className="text-justify text-xl font-bold">Welcome to Enjooya</h2>
        <h3 className="text-justify text-xl font-bold">Create an account</h3>
        <div className="my-8 text-custom-color-1 ">
          <div className="flex flex-col mt-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Full Name"
              onBlur={handleNameBlur}
              onChange={handleNameChange}
              value={nameValue}
              className="p-4 w-full rounded-xl placeholder:text-custom-color-9 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-custom-color-11"
            />
            {nameHasError && (
              <p className="text-orange-500 text-base">
                {nameHasError && "Please enter a valid name."}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-4">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
              value={emailValue}
              className="p-4 w-full rounded-xl placeholder:text-custom-color-9 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-custom-color-11"
            />
            {emailHasError && (
              <p className="text-orange-500 text-base">
                {emailHasError && "Please enter a valid email."}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              value={passwordValue}
              className="p-4 w-full rounded-xl placeholder:text-custom-color-9 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-custom-color-11"
            />
            {passwordHasError && (
              <p className="text-orange-500 text-base">
                {passwordHasError && "Please enter a valid password."}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-4">
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              onBlur={handleCPasswordBlur}
              onChange={handleCPasswordChange}
              value={cpasswordValue}
              className="p-4 w-full rounded-xl placeholder:text-custom-color-9 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-custom-color-11"
            />
            {cpasswordHasError && (
              <p className="text-orange-500 text-base">
                {cpasswordHasError && "Passwords do not match."}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-custom-color-5 text-white rounded-xl hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
      <p>By signing up, you accept our </p>
      <p>Terms of Use and Privacy Policy</p>
      <hr className="my-4 border-solid border-2 border-slate-200 rounded-lg" />
      <p>
        Already have an account? <a className="text-custom-color-5">Login</a>
      </p>
    </div>
  );
}
