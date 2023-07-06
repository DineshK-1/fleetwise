import "./cabs.styles.css";
import CabCard from "../components/cab_card.component";
import CabsSection from "./Components/cabs_section.components";

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_cabs", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CabDetails() {
  const data = await getData();

  return (
    <div className="cabs-section">
      <h2 className="w-500">Cabs Management</h2>
      <CabsSection cabs_data={data} />
    </div>
  );
}
