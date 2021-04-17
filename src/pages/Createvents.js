import "../assets/styles/Createvents.css";
// import { Link } from "react-router-dom";
const Createvents = () => {
    return(
        <div className="createvents-page">
  <div className="form">
    <form>
      <input type="text" placeholder="event name"/>
      <input type="text" placeholder="event location"/>
      <textarea
          placeholder="event description"
          rows={7}
          cols={7}
        />
    <input type="number" placeholder="price of tickets, if free indicate 0"/>
      <button>Create</button>
    </form>
  </div>
</div>
    )
}

export default Createvents