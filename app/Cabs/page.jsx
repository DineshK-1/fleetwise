import "./cabdeets.css";
import CabCard from "../components/cab-card.component";

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.API_HOST + "/get_cabs")

  return res.json();
}

export default async function CabDetails() {
  const data = await getData()
  console.log(data)
  return (
    <div className="cabs-page">
      {data.cabs.map((cab) => {
        return <CabCard
          key={cab.id}
          reg={cab.cab_regno}
          color={cab.cab_color}
          name={cab.cab_model}
        />
      })}
    </div>
  );
}
