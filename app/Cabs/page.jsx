import "./cabdeets.css";

function CabCard({ reg, name, cabcolor }) {
  return (
    <div className="cabcard">
      <div className="top">
        <img src="" alt="" />
        <p>
          {cabcolor}
          {name}
        </p>
        <h3> {reg} </h3>

        <h4>IMAGE</h4>
      </div>

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
    <div className="cabs-page">
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
