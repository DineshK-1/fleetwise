import "./cabs.styles.css";
import CabsSection from "./Components/cabs_section.components";

/**
 * getData Function
 *
 * The getData function is an asynchronous function that fetches data from an external API.
 * It uses the `NEXT_PUBLIC_API_HOST` environment variable as the base URL for the API request.
 *
 * @returns {Promise} A Promise that resolves to the JSON data fetched from the API.
 */

async function getData() {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/get_cabs", {
    cache: "no-store",
  });

  return res.json();
}

/**
 * CabDetails Component
 *
 * The CabDetails component is a Next.js component that fetches data from an external API
 * using the `NEXT_PUBLIC_API_HOST` environment variable. It then renders a section for
 * "Cabs Management" with the data fetched from the API.
 *
 * This component imports styles from "cabs.styles.css" and uses the "CabsSection" component
 * from "./Components/cabs_section.components" to display the cabs data.
 *
 * @returns {JSX.Element} The JSX representation of the CabDetails component.
 */

export default async function CabDetails() {
  const data = await getData();

  return (
    <div className="cabs-section">
      <h2 className="w-500">Cabs Management</h2>
      <CabsSection cabs_data={data} />
    </div>
  );
}
