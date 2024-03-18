import { useRef, useState } from "react";

export default function VerifyEmail() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpBoxReference = useRef([]);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(otp);
  }
  function handleChange(event, index) {
    const value = event.target.value;
    if (isNaN(value)) return;
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);
    if (value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }
  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  return (
    <div className="basis-2/5 p-10 font-semibold">
      <h1 className="text-center text-2xl font-bold">Brand Name</h1>
      <hr className="mt-2 border-solid border-2 border-slate-200 rounded-lg" />
      <form className="mt-4" onSubmit={handleSubmit}>
        <h3 className="text-center text-xl font-bold">Verify Email Address</h3>
        <p>Please enter the OTP weve send to asdkjnasdkj@gmail.com</p>
        <div className="my-8 text-custom-color-1 ">
          {otp.map((digit, index) => (
            <input
              type="text"
              id="otp"
              key={index}
              className="w-12 h-12 text-center border-solid border-2 border-slate-200 rounded-lg mx-2"
              value={digit}
              maxLength={1}
              onChange={(event) => handleChange(event, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-custom-color-5 text-white rounded-xl hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
