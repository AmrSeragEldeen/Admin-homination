import { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import { requests } from "./req";

const Home = () => {
  const [showWaiting, setShowWaiting] = useState(false);
  const [showApproved, setShowApproved] = useState(false);
  const [showRejected, setShowRejected] = useState(false);
  const [details, setDetails] = useState(false);
  const [waitingData, setWaitingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectedData, setRejectedData] = useState([]);

  useEffect(() => {
    const waiting = requests.filter((req) => req.request === "waiting");
    setWaitingData(waiting);
  }, [requests,approvedData,rejectedData]);


  const handleDelete = (id) => {
    const NewData = waitingData.filter((data) => data._id !== id);
    setWaitingData(NewData);
  };
  const handleApprove = (id) => {
   const data = waitingData.filter((dat) => dat._id === id)
   data[0].request = "approved"
    setApprovedData(data);
  };
  
  const handleReject = (id) => {
    const data = waitingData.filter((dat) => dat._id === id);
    data[0].request = "rejected"
    setRejectedData(data);
  };
  return (
    <>
      <Row>
        <Button variant="outline-success" onClick={() => setShowWaiting(!showWaiting)}>
          Waiting Requests
        </Button>
        {"5 "}
        {showWaiting && (
          <div className="container">
            {waitingData.map((req) => {
              return (
                <div key={req._id} className="card">
                  <p className="title"> ID : {req._id}</p>
                  <p className="title_ELEMENT"> Title : {req.title}</p>
                  <p className="title_ELEMENT"> Request : {req.request}</p>
                  {!details && (
                    <Button className="btn-color " onClick={() => setDetails(true)}>
                      More Details
                    </Button>
                  )}
                  {details && (
                    <>
                      <p className="title_ELEMENT"> Categories : {req.categories}</p>
                      <p className="title_ELEMENT"> Provider : {req.provider}</p>
                    </>
                  )}
                  <Button className="btn-color " onClick={() => handleDelete(req._id)}>Delete</Button>
                  <Button  className="btn-color " onClick={() => handleApprove(req._id)}>Approve</Button>
                  <Button className="btn-color " onClick={() => handleReject(req._id)}>Reject</Button>
                </div>
              );
            })}
          </div>
        )}
        <Button variant="outline-success" onClick={() => setShowApproved(!showApproved)}>Approved Requests</Button>
        {showApproved && (
          <div className="container">
            {approvedData?.map((req) => {
              return (
                <div key={req._id} className="card">
                  <p className="title_approve"> ID : {req._id}</p>
                  <p className="title_approve"> Title : {req.title}</p>
                  <p className="title_approve"> Request : {req.request}</p>
                </div>
              );
            })}
          </div>
        )}
        {" 5"}
        <Button variant="outline-success" onClick={() => setShowRejected(!showRejected)}>Rejected Requests</Button>
        {showRejected && (
          <div className="container">
            {rejectedData?.map((req) => {
              return (
                <div key={req._id} className="card">
                  <p className="title_rejected"> ID : {req._id}</p>
                  <p className="title_rejected"> Title : {req.title}</p>
                  <p className="title_rejected"> Request : {req.request}</p>
                </div>
              );
            })}
          </div>
        )}
        {" 5"}
        <Button variant="outline-success">End Requests</Button>
        {"5 "}
      </Row>
    </>
  );
};

export default Home;