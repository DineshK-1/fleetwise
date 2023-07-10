import Image from "next/image";
import cabimg from "@/public/cabpic.svg";

export default function Loading() {
    return (
        <div className="cabs-section">
            <h2 className="w-500">Cabs Management</h2>
            {/* <CabsSection cabs_data={data} /> */}
            <div className="search-cabs">
                <div className="search-boxes">
                    <input type="search" className="search cab-search" placeholder="Filter by model name" />
                    <input type="search" className="search cab-search" placeholder="Search by Registeration Number" />
                    <input type="search" className="search cab-search" placeholder="Search by Color" />
                    <div className="add-cab-btn">
                        <div className="search-button">
                            Search
                        </div>
                    </div>
                </div>
            </div>
            <div className="loading-cabs">
                {[...Array(15)].map((e) => {
                    return (
                        <div className="cab-container">
                            <div className="cab-info-top" style={{ width: "80%" }}>
                                <span className="skeleton skeleton-text"></span>
                                <span className="material-icons-outlined">edit</span>
                            </div>
                            <div className="cab-img">
                                <Image src={cabimg} alt="cab" />
                            </div>
                            <div className="cab-info-bottom" style={{ width: "80%" }}>
                                <span className="skeleton skeleton-text"></span>
                                <div className="bottom-color" >
                                    <div className="color-box" style={{
                                        backgroundColor: "#212124",
                                        border: "1px dotted white",
                                    }}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className="cab-driver-link" style={{ width: "80%" }}>
                                <span className="skeleton skeleton-text"></span>
                            </div>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
}