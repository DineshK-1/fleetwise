import DriversSection from "./Components/drivers_section.component";

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_drivers", { cache: 'no-store' })

  return res.json();
}

export default async function DriverDetails() {

  const data = await getData()

  return (
    <div className="driver-section">
      <h2 className="w-500">Drivers Management</h2>
      <DriversSection drivers_data={data} />
    </div>
  );
}
