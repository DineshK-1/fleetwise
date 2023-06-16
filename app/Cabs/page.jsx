import "./cabdeets.css";

function CabCard({ reg, name, cabcolor }) {
  return (
    <div className="cabcard">
      <h3> {reg} </h3>
      <img src="" alt="" />
      <p>
        {cabcolor}
        {name}
      </p>
      <div className="icons">
        <span class="material-icons-outlined">info</span>
        <span class="material-icons-outlined">more_vert</span>
      </div>
    </div>
  );
}
``;
export default function CabDetails() {
  const array = [
    { cabreg: "TN1252165", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252165", cabname: "Subaru", cabcolor: "Black" },
  ];
  return (
    <div>
      {array.map((cab) => (
        <CabCard
          key={cab.cabreg}
          reg={cab.cabreg}
          name={cab.cabname}
          cabcolor={cab.cabcolor}
        />
      ))}
    </div>
  );
}
