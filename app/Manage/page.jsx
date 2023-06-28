import CabWrapper from "./components/cab_wrapper.component";
import DriverWrapper from "./components/driver_wrapper.component";
import "./management.styles.css";

async function getDrivers() {
  // Fetch data from external API
  let res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_drivers", { cache: 'no-store' })
  return res.json();
}

async function getCabs() {
  // Fetch data from external API
  let res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_cabs", { cache: 'no-store' })
  return res.json();
}

export default async function ManagementPage() {

  const driversFetch = getDrivers()
  const cabsFetch = getCabs()
  const [drivers, cabs] = await Promise.all([driversFetch, cabsFetch]);

  return (
    <div className="manage-page">
      <h2 className="w-500">Cab-Driver Relations</h2>

      <div className="manage-wrapper">
        <CabWrapper cabs={cabs} />
        <DriverWrapper Drivers={drivers} />
      </div>
    </div>
  )
}
