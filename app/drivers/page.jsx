import DriversSection from "./Components/drivers_section.component";

/**
 * Function to fetch data from the external API.
 *
 * @async
 * @function getData
 * @returns {Promise<object>} The JSON data containing drivers' information.
 */

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_drivers", {
    cache: "no-store",
  });

  return res.json();
}

/**
 * DriverDetails Page Component
 *
 * The DriverDetails page component is a Next.js page that displays the drivers' management section.
 * It fetches data from an external API using the `getData` function and then passes the data to the `DriversSection` component.
 *
 * The `DriverDetails` page component is used to display the drivers' details, including their names, contact information, and other relevant data.
 *
 * The component uses the `DriversSection` component to render the drivers' management section on the page.
 *
 * @returns {JSX.Element} The JSX representation of the DriverDetails page component.
 */

export default async function DriverDetails() {
  const data = await getData();

  return (
    <div className="driver-section">
      <h2 className="w-500">Drivers Management</h2>
      <DriversSection drivers_data={data} />
    </div>
  );
}
