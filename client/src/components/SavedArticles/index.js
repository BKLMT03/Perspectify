import React from "react"
import Article from "../Article"
import Col from "../Col"
import Row from "../Row"
import ProfileName from '../ProfileName'
import ProfilePic from "../ProfilePic"

function SavedArticles(){
    return(
        <div>
            <Row>
                <Col size="1"><ProfilePic></ProfilePic></Col>
                <Col size="4"><ProfileName></ProfileName></Col>
            </Row>
            <Row>
                <Col size="4">
                <Article/>
                </Col>
                
            </Row>
        </div>
    )
}

export default SavedArticles