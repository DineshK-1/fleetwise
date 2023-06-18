import "./cabdeets.css";
import CabCard from "../components/cab-card.component";

export default function CabDetails() {
  const array = [
    { cabreg: "TN1252165", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252167", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252168", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252169", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252170", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252161", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252162", cabname: "Subaru", cabcolor: "Black" },
    { cabreg: "TN1252163", cabname: "Subaru", cabcolor: "Black" },
  ];
  return (
    <div className="cabs-page">
      {array.map((cab) => (
        <CabCard
          key={cab.cabreg}
          reg={cab.cabreg}
          name={cab.cabname}
          color={cab.cabcolor}
        />
      ))}
    </div>
  );
}
