import DraggableDriver from "./components/draggable_driver.component";
import ManageCabCard from "./components/manage_cab_card.component";
import "./management.styles.css";

export default function ManagementPage() {
  return (
    <div className="manage-page">
      <h2 className="w-500">Cab-Driver Relations</h2>

      <div className="manage-wrapper">
        <div className="cabs">
          <ManageCabCard driver_name={"DK"} driver_id={"6969"} />
          <ManageCabCard />
        </div>
        <div className="drivers">
          <h3 className="w-500">Drivers</h3>
          <DraggableDriver first={"test"} second={"Dinesh"} third={"6969"} Draggable={true} />
        </div>
      </div>
    </div>
  )
}
