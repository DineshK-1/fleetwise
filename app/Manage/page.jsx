import DriverWrapper from "./components/driver_wrapper.component";
import ManageCabCard from "./components/manage_cab_card.component";
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
        <div className="cabs">
          {
            cabs &&
            cabs.cabs.map(({ cab_model, cab_color, cab_regno }) => {
              return (
                <ManageCabCard cab_name={cab_model} color={cab_color} reg={cab_regno} driver_name={"DK"} driver_id={"6969"} />
              )
            })
          }
        </div>
        <DriverWrapper Drivers={drivers} />
      </div>
    </div>
  )
}
