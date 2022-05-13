import "./table.css";
const Table = (props) => {
  return (
    <div className="table-header">
      <div className="name">
        <h3>Name</h3>
        <img src={props.image} alt="" />
        <p>
          {props.firstname} {props.lastname}
        </p>
      </div>
      <div>
        <h3>Email</h3>
        <p>{props.email}</p>
      </div>
      <div>
        <h3>Phone Number</h3>
        <p>{props.phoneNumber}</p>
      </div>
      <div>
        <h3>Gender</h3>
        <p>{props.gender}</p>
      </div>
      <div>
        <h3>City</h3>
        <p>{props.city}</p>
      </div>
    </div>
  );
};

export default Table;

