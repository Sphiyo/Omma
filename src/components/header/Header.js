import BarStart from "./BarStart";
import BarMid from "./BarMid";
import BarEnd from "./BarEnd";


export default function Header(){
  return (
  <header className="d-flex align-items-center justify-content-between bg-dark text-light">
    <BarStart />
    <BarMid />
    <BarEnd />
  </header>
  );
}