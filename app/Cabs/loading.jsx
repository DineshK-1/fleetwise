import Image from "next/image";
import cabimg from "@/public/cabpic.svg";

/**
 * Loading Component
 *
 * The Loading component is a React component that renders a "Cabs Management" section
 * with placeholder data and loading skeletons for cabs. It uses the `Image` component
 * from Next.js to display a placeholder SVG image for each cab.
 *
 * The loading-cabs section shows loading placeholders for a list of cabs, which are represented
 * by a `cab-container`. The cab information and images are displayed as loading skeletons
 * while waiting for the actual data to be loaded.
 *
 * Note: This component is used for displaying a loading state of the cabs and will be replaced
 * with actual data from the API after loading completes.
 *
 * @returns {JSX.Element} The JSX representation of the Loading component.
 */

export default function Loading() {
  return (
    <div className="cabs-section">
      <h2 className="w-500">Cabs Management</h2>
      {/* <CabsSection cabs_data={data} /> */}
      <div className="search-cabs">
        <div className="search-boxes">
          <input
            type="search"
            className="search cab-search"
            placeholder="Filter by model name"
          />
          <input
            type="search"
            className="search cab-search"
            placeholder="Search by Registeration Number"
          />
          <input
            type="search"
            className="search cab-search"
            placeholder="Search by Color"
          />
        </div>
      </div>
      <div className="loading-cabs">
        {[...Array(15)].map((e) => {
          return (
            <div key={e} className="cab-container">
              <div className="cab-info-top" style={{ width: "80%" }}>
                <span className="skeleton skeleton-text"></span>
                <span className="material-icons-outlined">edit</span>
              </div>
              <div className="cab-img">
                <Image src={cabimg} alt="cab" />
              </div>
              <div className="cab-info-bottom" style={{ width: "80%" }}>
                <span className="skeleton skeleton-text"></span>
                <div className="bottom-color">
                  <div
                    className="color-box"
                    style={{
                      backgroundColor: "#212124",
                      border: "1px dotted white",
                    }}
                  ></div>
                </div>
              </div>
              <div className="cab-driver-link" style={{ width: "80%" }}>
                <span className="skeleton skeleton-text"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
