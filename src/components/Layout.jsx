import sprinklebgImg from "../assets/Sprinkle.svg";
import lanternImg from "../assets/day21-Lantern.png";
import Register from "./Register";
export default function Layout() {
  return (
    <section
      className="flex text-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sprinklebgImg})` }}
    >
      <div className="flex flex-row bg-slate-50 h-3/4 w-3/4 mx-auto my-auto rounded-3xl">
        <Register />
        <div
          className="basis-3/5 bg-cover bg-center bg-no-repeat rounded-r-3xl"
          style={{ backgroundImage: `url(${lanternImg})` }}
        ></div>
      </div>
    </section>
  );
}
