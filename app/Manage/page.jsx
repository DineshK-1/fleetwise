import CabWrapper from "./components/cab_wrapper.component";
import DriverWrapper from "./components/driver_wrapper.component";
import "./management.styles.css";

/**
 * getDrivers function
 *
 * This async function fetches data for drivers from the external API.
 *
 * @returns {Promise} A promise that resolves to the fetched drivers data.
 */
async function getDrivers() {
  // Fetch data from external API
  let res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_drivers", {
    cache: "no-store",
  });
  return res.json();
}

/**
 * getCabs function
 *
 * This async function fetches data for cabs from the external API.
 *
 * @returns {Promise} A promise that resolves to the fetched cabs data.
 */
async function getCabs() {
  // Fetch data from external API
  let res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_cabs", {
    cache: "no-store",
  });
  return res.json();
}

/**
 * ManagementPage Component
 *
 * The ManagementPage component is a React page component that fetches data for drivers and cabs from an external API.
 * After fetching the data, it renders the CabWrapper and DriverWrapper components, passing the fetched data as props to these components.
 *
 * @returns {JSX.Element} The JSX representation of the ManagementPage component.
 */
export default async function ManagementPage() {
  const driversFetch = getDrivers();
  const cabsFetch = getCabs();
  const [drivers, cabs] = await Promise.all([driversFetch, cabsFetch]);

  return (
    <div className="manage-page">
      <h2 className="w-500">Cab-Driver Relations</h2>

      <div className="manage-wrapper">
        <CabWrapper cabs={cabs} />
        <DriverWrapper Drivers={drivers} />
      </div>
    </div>
  );
}
