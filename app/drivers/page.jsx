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

      <div className="search-drivers">
        <input
          type="search"
          className="search name-search"
          placeholder="Enter a name to search"
        />
        <input
          type="search"
          className="search"
          placeholder="Enter a ID to search"
        />
        <input
          type="search"
          className="search cab-search"
          placeholder="Enter name of the cab"
        />
      </div>

      <DriversSection drivers_data={data} />
    </div>
  );
}
