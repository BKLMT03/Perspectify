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
                <Col size="3"><ProfileName /*data={props.location.state.data.data}*/></ProfileName></Col>
            </Row>
            <br>
            </br>
            <Container>
                <Row><h3>Recent Activity</h3></Row>
                <Row><Col size="8"><DonutChart></DonutChart></Col>
                    <Col size="4"><Row><h5>Your Activities</h5></Row>
                        <Row><div className="recent-activity-item"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Covid-21 has emerged.</a></div></Row>
                        <Row><div className="recent-activity-item"><a href="https://twitter.com/realdonaldtrump">Trump twitter account is back online!</a></div></Row>
                        <Row><div className="recent-activity-item"><a href="https://www.cbc.ca/news/canada/toronto/covid-19-ontario-shutdown-hospital-intensive-care-icu-patients-1.5969831">Ontario imposes provincewide 'emergency brake' as 3rd wave of COVID-19 hits hard</a></div></Row>
                        <Row><div className="recent-activity-item"><a href="http://www.notarealwebsite.net/">Disney reaches agreement with WB to purchase the DC Comics fil rights</a></div></Row>
                        <Row><div className="recent-activity-item"><a href="https://www.thebeaverton.com/2021/04/educated-man-says-hed-rather-die-than-risk-dying-from-astrazeneca-vaccine/">Educated man says he’d rather die than risk dying from AstraZeneca vaccine</a></div></Row>
                        <Row><div className="recent-activity-item"><a href="https://www.thebeaverton.com/2021/04/local-woman-makes-suspiciously-late-happy-quarantine-aversary-post/">Local woman makes suspiciously late “Happy Quarantine-aversary!” post</a></div></Row>
                        
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