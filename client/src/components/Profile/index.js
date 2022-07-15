import { React, useState, useContext, useEffect, useMemo } from "react";
import Article from "../Article";
import Col from "../Col";
import Row from "../Row";
import ProfileName from "../ProfileName";
import ProfilePic from "../ProfilePic";
import Container from "../Container";
import DonutChart from "../DonutChart";
import "./style.css";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";

const Profile = (props) => {
  const context = useContext(GlobalContext);
  const [user, setUser] = useState(null);

  const userAuthenticated = async () => {
    const res = await axios
      .get("/api/v1/auth", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        context.user.user = response.data;
        setUser(response.data);
      });
  };

  useEffect(async () => {
    await userAuthenticated();
  }, []);

  return (
    <div>
      <Row>
        <Col size="2">
          <ProfilePic></ProfilePic>
        </Col>
        <Col size="3">
          {/* <ProfileName data={user}></ProfileName> */}
        </Col>
      </Row>
      <br></br>
      <Container>
        <Row>
          <h3>Recent Activity</h3>
        </Row>
        <Row>
          <Col size="8">
            <DonutChart></DonutChart>
          </Col>
          <Col size="4">
            <Row>
              <h5 style={{ fontFamily: "Special Elite" }}>Recently Viewed</h5>
            </Row>
            <Row>
              <div className="recent-activity-item">-------------</div>
            </Row>
            <Row>
              <div className="recent-activity-item">-------------</div>
            </Row>
            <Row>
              <div className="recent-activity-item">-------------</div>
            </Row>
            <Row>
              <div className="recent-activity-item">-------------</div>
            </Row>
            <Row>
              <div className="recent-activity-item">-------------</div>
            </Row>
            <Row>
              <div className="recent-activity-item">-------------</div>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <br></br>
      <Row>
        <Col size="4">
          <h2>Saved Articles </h2>
          {/* saved articles here */}
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
