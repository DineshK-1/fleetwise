import "./cabs.styles.css";
import CabCard from "../components/cab_card.component";

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_cabs", { cache: 'no-store' })

  return res.json();
}

export default async function CabDetails() {
  const data = await getData()
  
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
