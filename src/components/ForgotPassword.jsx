import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty } from "../util/validation";

export default function ForgotPassword() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError) {
      return;
    }
  }
  return (
    <div className="basis-2/5 p-10 font-semibold">
      <h1 className="text-justify text-2xl font-bold">Forgot Password</h1>
      <hr className="mt-2 border-solid border-2 border-slate-200 rounded-lg" />
      <form className="mt-4" onSubmit={handleSubmit}>
        <h2 className="text-justify text-xl font-bold">Welcome to Enjooya</h2>
        <h3 className="text-justify text-xl font-bold">asdsadsadsadsa</h3>
        <div className="my-8 text-custom-color-1 ">
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
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-custom-color-5 text-white rounded-xl hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
        >
          Send reset link
        </button>
      </form>
    </div>
  );
}
