


export default function BarLink(props){
  return (
  <div className="text-white hover-text-black hover-invert" >
    <a className="text-white hover-text-black" href={props.href}>
      <img src={props.src} alt={props.alt} width={40} height={40} />
      <br />
      <span className="text-white hover-text-black hover-invert">{props.text}</span>
    </a>
  </div>
  );
}