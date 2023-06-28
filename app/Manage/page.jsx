import DriverWrapper from "./components/driver_wrapper.component";
import ManageCabCard from "./components/manage_cab_card.component";
import "./management.styles.css";

async function getData() {
  // Fetch data from external API
  let res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_drivers", { cache: 'no-store' })
  res = await res.json()
  return [res, {}];
}

export default async function ManagementPage() {

  const [drivers, cabs] = await getData();

  return (
    <div className="manage-page">
      <h2 className="w-500">Cab-Driver Relations</h2>

      <div className="manage-wrapper">
        <div className="cabs">
          <ManageCabCard driver_name={"DK"} driver_id={"6969"} />
          <ManageCabCard />
        </div>
        <DriverWrapper Drivers={drivers} />
      </div>
    </div>
  )
}
