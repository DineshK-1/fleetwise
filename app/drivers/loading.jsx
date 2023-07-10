import Image from "next/image";

export default function Loading() {
    return (
        <div className="driver-section">
            <h2 className="w-500">Drivers Management</h2>
            <div className="driver-cards">
                {[...Array(15)].map((e) => {
                    return (
                        <div key={e} className="driver-card">
                            <div className="card-top">
                                <div className="left" style={{ width: "100%" }}>
                                    <div className="image">
                                        <Image
                                            src={"/blank-profile.png"}
                                            alt="driver pic"
                                            width={64}
                                            height={64}
                                            style={{ borderRadius: "5rem" }}
                                        />
                                    </div>

                                    <div className="details" style={{ width: "100%" }}>
                                        <span className="skeleton skeleton-text"></span>
                                        <span className="skeleton skeleton-text"></span>
                                    </div>
                                </div>
                                <div className="action-buttons">
                                    <div className="edit-button">
                                        <span
                                            className="material-icons-outlined"

                                        >
                                            edit
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="tags">
                                <div className="cab tag" style={{ width: "30%" }}><span className="skeleton skeleton-text"></span></div>
                                <div className="since tag" style={{ width: "25%" }}><span className="skeleton skeleton-text"></span></div>
                            </div>

                            <div className="tags">
                                <div className="email tag" style={{ width: "25%" }}><span className="skeleton skeleton-text"></span></div>
                                <div className="phone tag" style={{ width: "25%" }}><span className="skeleton skeleton-text"></span></div>
                            </div>
                        </div >
                    )
                })}

            </div>
        </div>
    )
}