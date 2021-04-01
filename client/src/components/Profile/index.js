import {React, useState, useEffect} from "react"
import Article from "../Article"
import Col from "../Col"
import Row from "../Row"
import ProfileName from '../ProfileName'
import ProfilePic from "../ProfilePic"
import Container from "../Container"
import DonutChart from "../DonutChart"
import "./style.css"
import axios from "axios"

const Profile = (props) => {
    

    return (
        <div>
            <Row>
                <Col size="2"><ProfilePic></ProfilePic></Col>
                <Col size="3"><ProfileName data={props.location.state.data.data}></ProfileName></Col>
            </Row>
            <br>
            </br>
            <Container>
                <Row><h3>Recent Activity</h3></Row>
                <Row><Col size="8"><DonutChart></DonutChart></Col>
                    <Col size="4"><Row><h5>Your Activities</h5></Row>
                        <Row><div className="recent-activity-item">-------------</div></Row>
                        <Row><div className="recent-activity-item">-------------</div></Row>
                        <Row><div className="recent-activity-item">-------------</div></Row>
                        <Row><div className="recent-activity-item">-------------</div></Row>
                        <Row><div className="recent-activity-item">-------------</div></Row>
                        <Row><div className="recent-activity-item">-------------</div></Row>
                        
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <br>
            </br>
            <Row>
                <Col size="4">
                    {/* saved articles here */}
                </Col>

            </Row>
        </div>
    )
}

export default Profile