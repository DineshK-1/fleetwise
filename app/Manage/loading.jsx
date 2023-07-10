export default function Loading() {
    return (
        <div className="manage-page">
            <h2 className="w-500">Cab-Driver Relations</h2>

            <div className="manage-wrapper">
                <div className="cabs">
                    {[...Array(8)].map((e) => {
                        return (
                            <div key={e} className="cab-card">
                                <span className="skeleton skeleton-text"></span>
                                <span className="skeleton skeleton-text"></span>
                                <span className="skeleton skeleton-text"></span>
                                <hr className="divider" />
                                <span className="skeleton skeleton-text"></span>
                            </div>
                        )
                    })}
                </div>
                <div className="drivers">
                    <h3 className="w-500">Drivers</h3>
                    <div className="search-boxes">
                        <input type="text" className="search" placeholder="Search name here" />
                        <input type="number" className="search" placeholder="Search ID here" />
                    </div>
                    {[...Array(20)].map((e) => {
                        return (
                            <span key={e} className="skeleton skeleton-text"></span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}