import { useState, useEffect, React } from "react";
import axios from "axios";
import newsApiKeys from "../../config/apikeys";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "../Carousel/Carosel";
import "./ArticleDiscussionPage.css";
import { set } from "mongoose";

const ArticleDiscussionPage = (props) => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [activeArticleUrl, setActiveArticleUrl] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [activeArticleTitle, setActiveArticleTitle] = useState();
  const [activeArticleContent, setActiveArticleContent] = useState();
  const [relatedOrTrending, setRelatedOrTrending] = useState(0);
  const [articleStatus, setArticleStatus] = useState(0);
  const top5 = [];

  const updateUserStats = async () => {
    
  }

  const getArticleData = async () => {
    console.log(props.location.state.url);
    try {
      const res = await axios.get("/api/v1/articles", {
        params: { query: props.location.state.url },
      });
      setActiveArticleTitle(res.data.data.title);
      setActiveArticleContent(res.data.data.content);
      
    } catch (error) {
      if (error) {
        setActiveArticleTitle("Oops...something went wrong trying to retrieve the article...please try refreshing the page or try again later!")
      }
    }
    
    
  };

  const queryNewsApi = async () => {
    const key =
    newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))];
    console.log(key);
    console.log("generating news....");
    if (!props.location.state.query) {
      setRelatedOrTrending(1);
      const queryNewsData = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key
      )
      for (let i = 0; i < 5; i++) {
        top5.push(queryNewsData.data.articles[i]);
      }
    } else {
      setRelatedOrTrending(0);
      const queryNewsData = await axios.get(
        "https://newsapi.org/v2/everything?qInTitle=" +
          props.location.state.query +
          "&language=en&sortBy=popularity&apiKey=" +
          key
      );
      for (let i = 0; i < 5; i++) {
        top5.push(queryNewsData.data.articles[i]);
      }
    }
    
    setArticleData(top5);
    setActiveArticleUrl(props.location.state.url);
  };

  const getComments = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      if (!props.location.state.query) {
        const res = await axios.get("/api/v1/comments", {
          params: { topic: props.location.state.url.toLowerCase()},
        });
        if (res.data.message === "No comments regarding this topic to show!") {
          setComments([res.data.message]);
        } else {
          setComments(res.data.data);
        }
      } else {
        const res = await axios.get("/api/v1/comments", {
          params: { topic: props.location.state.query.toLowerCase()},
        });
        if (res.data.message === "No comments regarding this topic to show!") {
          setComments([res.data.message]);
        } else {
          setComments(res.data.data);
        }
      }
      // const res = await axios.get('/api/v1/comments');
      
    } catch (error) {}
    console.log(comments[0]);
  };

  const addComments = async () => {
    if (!props.location.state.query) {
      const topic = props.location.state.url
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const res = await axios.post(
          "/api/v1/comments",
          {
            topic: topic.toLowerCase(),
            name_first: "Kanye",
            name_last: "West",
            text: currentComment,
          },
          config
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      const topic = props.location.state.query
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const res = await axios.post(
          "/api/v1/comments",
          {
            topic: topic.toLowerCase(),
            name_first: "Kanye",
            name_last: "West",
            text: currentComment,
          },
          config
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(async () => {
    await queryNewsApi();
    await handleRemoveInput();
    await getComments();
    await getArticleData();
    await updateUserStats();
    window.scrollTo(0, 0);
    setActiveQuery(props.location.state.query);
  }, []);

  const handleChange = (e, index) => {
    setCurrentComment(e.target.value);
  };

  const handleAddInput = () => {
    addComments();
    getComments();
    handleRemoveInput();
  };

  const handleRemoveInput = () => {
    setCurrentComment("");
  };

  // new DOMParser().parseFromString(activeArticleContent, "text/xml")

  return (
    <Container className="mt-5">
      <div>
        <Row className="justify-content-center">
          <div className="articleSection">
            <h2>{activeArticleTitle}</h2>
            <div>
              <div dangerouslySetInnerHTML={{ __html: activeArticleContent }} />
            </div>
            {/* add {activeArticleContent} inside above div to show scraped article} */}
          </div>
        </Row>
        <div> <h2><a href={activeArticleUrl}> View original article here </a></h2></div>
        <Carousel data={articleData} query={props.location.state.query} relatedOrTrending={relatedOrTrending} />
        <Row className="mt-5">
          <div>
            <h2>Discuss</h2>
          </div>
        </Row>
        <div className="textBox">
          {/* add key={i} next to class name above */}
          <form>
            <textarea
              name="commentMessage"
              placeholder="Enter your comment here..."
              className="mr10"
              row="3"
              id="commentText"
              value={currentComment}
              onChange={(e) => handleChange(e)}
            />
            <button type="button" className="btn" onClick={handleAddInput}>
              Add Your Perspective
            </button>
          </form>
        </div>

        {[...comments].reverse().map((item, i) => {
          if (comments[0] === "No comments regarding this topic to show!") {
            return (
              <div>
                <p> {"No comments regarding this topic to show!"} </p>
              </div>
            );
          } else {
            return (
              <div key={i}>
                <p>
                  Name: {item.name_first} {item.name_last}{" "}
                </p>
                <p>Date: {item.createdAt} </p>
                <p>{item.text}</p>
              </div>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default ArticleDiscussionPage;
