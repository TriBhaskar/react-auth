import sprinklebgImg from "../assets/Sprinkle.svg";
import lanternImg from "../assets/day21-Lantern.png";
export default function Layout() {
  return (
    <section
      className="flex text-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sprinklebgImg})` }}
    >
      <div className="flex flex-row bg-slate-50 h-3/4 w-3/4 mx-auto my-auto rounded-3xl">
        <div className="basis-2/5 p-10">
          <h1 className="text-justify text-2xl font-bold">Login</h1>
          <hr className="mt-2 border-solid border-2 border-slate-200 rounded-lg" />
          <form className="mt-4">
            <h2 className="text-justify text-xl font-bold">
              Welcome to Enjooya
            </h2>
            <h3 className="text-justify text-xl font-bold">
              Create an account
            </h3>
            <div className="flex flex-col mt-4">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Full Name"
                className="mt-1 p-2 w-full rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-"
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                className="mt-1 p-2 w-full rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-"
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-"
              />
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="confirm passowrd"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
                className="mt-1 p-2 w-full rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-custom-color-11"
              />
            </div>
            <button className="mt-4 bg-slate-200 text-white rounded-lg py-2">
              Login
            </button>
          </form>
        </div>
        <div
          className="basis-3/5 bg-cover bg-center bg-no-repeat rounded-r-3xl"
          style={{ backgroundImage: `url(${lanternImg})` }}
        ></div>
      </div>
    </section>
  );
}
