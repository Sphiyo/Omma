import BarLink from "./BarLink";

export default function BarMid(props){
  return (
  <div className="d-flex gap-2">
    <BarLink src="home.png" text="Home" alt="Home Logo" href="#" />
    <BarLink src="email.png" text="About" alt="About Logo" href="#" />
  </div>
  );
}