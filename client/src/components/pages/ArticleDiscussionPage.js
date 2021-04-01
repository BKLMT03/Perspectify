import { useState, useEffect, React } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "../Carousel/Carosel";
import "./ArticleDiscussionPage.css";
import { set } from "mongoose";
import newsApiKeys from "../../config/apikeys";

const ArticleDiscussionPage = (props) => {
  const NEWS_KEY_ONE = process.env.REACT_APP_NEWS_KEY_ONE;
  const NEWS_KEY_TWO = process.env.REACT_APP_NEWS_KEY_TWO;
  const NEWS_KEY_THREE = process.env.REACT_APP_NEWS_KEY_THREE;
  const NEWS_KEY_FOUR = process.env.REACT_APP_NEWS_KEY_FOUR;
  const NEWS_KEY_FIVE = process.env.REACT_APP_NEWS_KEY_FIVE;
  const NEWS_KEY_SIX = process.env.REACT_APP_NEWS_KEY_SIX;
  const newsApiKeys = [NEWS_KEY_ONE, NEWS_KEY_TWO, NEWS_KEY_THREE, NEWS_KEY_FOUR, NEWS_KEY_FIVE, NEWS_KEY_SIX]
  //////////////////////////////////////////////////////////
  const GNEWS_KEY_ONE = process.env.REACT_APP_GNEWS_KEY_ONE
  const GNEWS_KEY_TWO = process.env.REACT_APP_GNEWS_KEY_TWO
  const GNEWS_KEY_THREE = process.env.REACT_APP_GNEWS_KEY_THREE
  const GNEWS_KEY_FOUR = process.env.REACT_APP_GNEWS_KEY_FOUR
  const GNEWS_KEY_FIVE = process.env.REACT_APP_GNEWS_KEY_FIVE
  const GNEWS_KEY_SIX = process.env.REACT_APP_GNEWS_KEY_SIX
  const GNEWS_KEY_SEVEN = process.env.REACT_APP_GNEWS_KEY_SEVEN
  const GNEWS_KEY_EIGHT = process.env.REACT_APP_GNEWS_KEY_EIGHT
  const gApiKeys = [GNEWS_KEY_ONE, GNEWS_KEY_TWO, GNEWS_KEY_THREE, GNEWS_KEY_FOUR, GNEWS_KEY_FIVE, GNEWS_KEY_SIX, GNEWS_KEY_SEVEN, GNEWS_KEY_EIGHT]
  /////////////////////////////////////////////////////////
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

  const spectrum = {
    data: {
      tech: ["CNET", "Engadget", "TechCrunch"],
      sports: ["ESPN", "Bleacher Report"],
      superLeft: [
        "Salon",
        "Daily Beast",
        "Black Lives Matter",
        "Slate",
        "Think Progress",
      ],
      midLeft: [
        "CNN",
        "New Yorker",
        "BBC News",
        "Politico",
        "CBS",
        "The Washington Post",
        "The Guardian",
        "Huffington Post",
        "New York Times",
        "NBC News",
      ],
      center: [
        "Reuters",
        "Al Jazeera",
        "Time",
        "Economist",
        "Bloomberg",
        "Associated Press",
        "Los Angeles Times",
        "ABC News",
        "NPR",
        "CSPAN",
        "CNBC",
      ],
      midRight: [
        "The Hill",
        "Russia Today",
        "Fox News",
        "New York Post",
        "Epoch Times",
        "Daily Mail",
      ],
      superRight: [
        "The Blaze",
        "OANN",
        "News Max",
        "Daily Caller",
        "Breitbart News",
        "Drudge Report",
      ],
    },
  };

  const style = {};

  const techX = spectrum.data.tech.includes(props.location.state.source);
  const sportsX = spectrum.data.sports.includes(props.location.state.source);
  const superLeftX = spectrum.data.superLeft.includes(
    props.location.state.source
  );
  const midLeftX = spectrum.data.midLeft.includes(props.location.state.source);
  const centerX = spectrum.data.center.includes(props.location.state.source);
  const midRightX = spectrum.data.midRight.includes(
    props.location.state.source
  );
  const superRightX = spectrum.data.superRight.includes(
    props.location.state.source
  );

  switch (true) {
    case techX:
      style.color = "turquoise";
      break;
    case sportsX:
      style.color = "red";
      break;
    case superLeftX:
      style.color = "pink";
      break;
    case midLeftX:
      style.color = "yellow";
      break;
    case centerX:
      style.color = "green";
      break;
    case midRightX:
      style.color = "orange";
      break;
    case superRightX:
      style.color = "purple";
      break;
    default:
      break;
  }

  const updateUserStats = async () => {};

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
        setActiveArticleTitle(
          "Oops...something went wrong trying to retrieve the article...please try refreshing the page or try again later!"
        );
      }
    }
  };

  const gNewsApiQuery = async () => {
    const key =
    gApiKeys[Math.floor(Math.random() * Math.floor(gApiKeys.length))];
    console.log(key);
    console.log("generating news....");
    if (!props.location.state.query) {
      setRelatedOrTrending(1);
      const gNewsData = await axios.get("https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=" + key)
      for (let i = 0; i < 5; i++) {
        top5.push(gNewsData.data.articles[i]);
      }
    } else {
      setRelatedOrTrending(0);
      const gNewsDataQuery = await axios.get("https://gnews.io/api/v4/search?q=" + props.location.state.query + "&language=en&country=us&sortby=publishedAt&token=" + key)
      for (let i = 0; i < 5; i++) {
        top5.push(gNewsDataQuery.data.articles[i]);
      }
    }
    var filtered = top5.filter(function(x) {
      return x !== undefined;
    });
    
    setArticleData(filtered);
    setActiveArticleUrl(props.location.state.url);
  };

  const queryNewsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))];
    console.log(key);
    console.log("generating news....");
    if (!props.location.state.query) {
      setRelatedOrTrending(1);
      const queryNewsData = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + key
      );
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
    var filtered = top5.filter(function (x) {
      return x !== undefined;
    });

    setArticleData(filtered);
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
          params: { topic: props.location.state.url.toLowerCase() },
        });
        if (res.data.message === "No comments regarding this topic to show!") {
          setComments([res.data.message]);
        } else {
          setComments(res.data.data);
        }
      } else {
        const res = await axios.get("/api/v1/comments", {
          params: { topic: props.location.state.query.toLowerCase() },
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
      const topic = props.location.state.url;
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
      const topic = props.location.state.query;
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
    // await queryNewsApi();
    await gNewsApiQuery();
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
    <Container className={"mt-5"}>
      <div>
        <Row className="justify-content-center">
          <div className="articleSection">
            <h2 style={style}>
              {activeArticleTitle} - {props.location.state.source}
            </h2>
            <div>
              <div dangerouslySetInnerHTML={{ __html: activeArticleContent }} />
            </div>
            {/* add {activeArticleContent} inside above div to show scraped article} */}
          </div>
        </Row>
        <div>
          {" "}
          <h3>
            <a href={activeArticleUrl} target="_blank">View Article on Source Page</a>
          </h3>
        </div>
        <Carousel
          data={articleData}
          query={props.location.state.query}
          relatedOrTrending={relatedOrTrending}
        />
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
                <Container>
                  <Row className="comment">
                    <p style={{ fontSize: "16px"}}>
                      Name: {item.name_first} {item.name_last}{" "}
                    </p>
                    <p style={{ fontSize: "14px"}}>Date: {item.createdAt.substr(0,10)} </p>
                    <p style={{ textDecoration: "italics", fontSize: "13px" }}>{item.text}</p>
                    <hr/>
                  </Row>
                </Container>
              </div>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default ArticleDiscussionPage;
