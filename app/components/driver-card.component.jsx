import "../Drivers/driverdeets.css";
import Image from "next/image";

export default function DriverCard({ name, ID, email, phone }) {
  return (
    <div className="driver-card">
      <div className="card-top">
        <div className="left">
          <div className="image">
            <Image
              src={"/blank-profile.png"}
              alt="driver pic"
              width={64}
              height={64}
              style={{ borderRadius: "5rem" }}
            />
          </div>

          <div className="details">
            <div className="title">{name}</div>
            <div className="id">ID: {ID}</div>
          </div>
        </div>
        <div className="action-buttons">
          <div className="edit-button">
            <span class="material-icons-outlined">edit</span>
          </div>
        </div>
      </div>

      <div className="tags">
        <div className="cab tag">Drives a Subaru</div>
        <div className="since tag">Driving since 2020</div>
      </div>

      <div className="tags">
        <div className="email tag">{email}</div>
        <div className="phone tag">{phone}</div>
      </div>
    </div>
  );
}
