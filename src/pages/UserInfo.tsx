import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {useContactQuery} from "../services/contactsApi";
import { toast } from "react-toastify";
import "./UserInfo.css";

const UserInfo = () => {
  const { id } = useParams();
  const {data, error, isFetching, isLoading} = useContactQuery(id!);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>{data && data.name} </strong>
          <span>Test</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{data && data.email}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{data && data.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
