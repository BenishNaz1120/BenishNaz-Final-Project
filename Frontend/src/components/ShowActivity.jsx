import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const ShowActivity = (props) => {

  const navigate = useNavigate();

  return (
    <div className="container col-12" id="div">
      <h4 id="my"> MY Activity</h4>
      <div className="row">
        {props.data.map((d) => (
          <div
            id="maincard"
            className="card mt-4 ml-4  border-info"
            style={{ width: "18rem" }}
          >
            <h5 class="card-header card-title text-center">{d.name}</h5>
            <div className="card-body ">
              {/* <h5 className="  card-header  card-title">{d.name}</h5> */}
              <p className="card-description">Description: {d.description}</p>
              <p className="card-option">Activity: {d.option}</p>
              <p className="card-duration">Time Duration: {d.duration}</p>
              <p className="card-date">Date: {d.date}</p>
              <button className="btn btn-primary mr-2" onClick={() => {
                props.edit(d._id);
                navigate("/AddActivity");
              }}>Edit</button>
              <button className="btn btn-danger" onClick={() => {
                axios
                  .delete(`http://localhost:4000/card/${d._id}`)
                  .then(() => console.log("data deleted"))
                  .catch((err) => alert("carddelete", err));
              }}>
                Delete
              </button>
            </div>

          </div>

        ))}
      </div>
    </div>
  )


};

export default ShowActivity;
