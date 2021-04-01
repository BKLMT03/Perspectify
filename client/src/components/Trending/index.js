import { useState, useEffect, React, useRef } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Article from '../Article'
import Card from "react-bootstrap/Card"
import Container from '../Container'
import Col from '../Col'
import Header from '../Header'
import Row from 'react-bootstrap/Row'
import news from '../../testnewsdata'
import { FaNewspaper } from 'react-icons/fa'
import Particles from "react-particles-js"
import "./style.css";

const Trending = (props) => {
  const [stockData, setStockData] = useState();
  const [topicData, setTopicData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [headerState, setHeaderState] = useState("Trending Topics");
  const [isEmpty, setIsEmpty] = useState("");
  const NEWS_KEY_ONE = process.env.REACT_APP_NEWS_KEY_ONE;
  const NEWS_KEY_TWO = process.env.REACT_APP_NEWS_KEY_TWO;
  const NEWS_KEY_THREE = process.env.REACT_APP_NEWS_KEY_THREE;
  const NEWS_KEY_FOUR = process.env.REACT_APP_NEWS_KEY_FOUR;
  const NEWS_KEY_FIVE = process.env.REACT_APP_NEWS_KEY_FIVE;
  const NEWS_KEY_SIX = process.env.REACT_APP_NEWS_KEY_SIX;
  const newsApiKeys = [
    NEWS_KEY_ONE,
    NEWS_KEY_TWO,
    NEWS_KEY_THREE,
    NEWS_KEY_FOUR,
    NEWS_KEY_FIVE,
    NEWS_KEY_SIX,
  ];
  /////////////////////////////////////////////////////////
  const GNEWS_KEY_ONE = process.env.REACT_APP_GNEWS_KEY_ONE;
  const GNEWS_KEY_TWO = process.env.REACT_APP_GNEWS_KEY_TWO;
  const GNEWS_KEY_THREE = process.env.REACT_APP_GNEWS_KEY_THREE;
  const GNEWS_KEY_FOUR = process.env.REACT_APP_GNEWS_KEY_FOUR;
  const GNEWS_KEY_FIVE = process.env.REACT_APP_GNEWS_KEY_FIVE;
  const GNEWS_KEY_SIX = process.env.REACT_APP_GNEWS_KEY_SIX;
  const GNEWS_KEY_SEVEN = process.env.REACT_APP_GNEWS_KEY_SEVEN;
  const GNEWS_KEY_EIGHT = process.env.REACT_APP_GNEWS_KEY_EIGHT;
  const gApiKeys = [
    GNEWS_KEY_ONE,
    GNEWS_KEY_TWO,
    GNEWS_KEY_THREE,
    GNEWS_KEY_FOUR,
    GNEWS_KEY_FIVE,
    GNEWS_KEY_SIX,
    GNEWS_KEY_SEVEN,
    GNEWS_KEY_EIGHT,
  ];
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  const topics = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
    "general",
  ];
  const emptyResults = [
    "That is a lot of empty....",
    "Nothing to see here....",
    "I think someone messed up",
    "Do you even search bro...",
    "Awks",
    "Smells like teen spirit....and a bad search query",
    "Couldn't think of anything better eh?",
    "*sad violin plays softly*",
  ];
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
        "The Associated Press",
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
  // const arr = news;
  //line 12 is static news data imported from testnewsdata
    const myRef = useRef()

  const executeScroll = () => myRef.current.scrollIntoView() 

  const hoaxyApi = async () => {
    const options = {
      method: "GET",
      url: "https://api-hoaxy.p.rapidapi.com/articles",
      params: {
        query: searchQuery + ' AND date_published:[2016-10-28 TO 2016-12-04]',
        sort_by: 'relevant',

        use_lucene_syntax: 'true'
      },
      headers: {
        "x-rapidapi-key": "069b892a66msh2d995309be35fddp16e393jsnbb12494f3f8d",
        "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const stockApi = async () => {
  //   const stockSymbol = 'GME';
  //   const stockQuery = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stockSymbol +'&interval=5min&apikey=' + stockApiKeys[0])
  //   console.log(stockQuery.data["Time Series (5min)"])
  // }

  const gNewsApi = async () => {
    const key =
      gApiKeys[Math.floor(Math.random() * Math.floor(gApiKeys.length))];
    console.log(key);
    console.log("generating news....");
    const gNewsData = await axios.get(
      "https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=" + key
    );
    console.log(gNewsData);
    setTopicData(gNewsData.data.articles);
  };

  const techX = spectrum.data.tech;
  const sportsX = spectrum.data.sports;
  const superLeftX = spectrum.data.superLeft;
  const midLeftX = spectrum.data.midLeft;
  const centerX = spectrum.data.center;
  const midRightX = spectrum.data.midRight;
  const superRightX = spectrum.data.superRight;

  const gNewsApiQuery = async () => {
    const key =
      gApiKeys[Math.floor(Math.random() * Math.floor(gApiKeys.length))];
    console.log(key);
    console.log("generating news....");
    //&in=title &in=description &in=content &country=us &country=ca
    const gNewsDataQuery = await axios.get(
      "https://gnews.io/api/v4/search?q=" +
        searchQuery +
        "&language=en&country=us&sortby=publishedAt&token=" +
        key
    );
    console.log(gNewsDataQuery.data.articles);
    //filter for only approved news articles
    // var filtered = gNewsDataQuery.data.articles.filter(function(x) {
    //   if(techX.includes(x.source.name) ||
    //       sportsX.includes(x.source.name)||
    //       superLeftX.includes(x.source.name)||
    //       midLeftX.includes(x.source.name)||
    //       centerX.includes(x.source.name)||
    //       midRightX.includes(x.source.name)||
    //       superRightX.includes(x.source.name)) {
    //         return x;
    //       } 
    // });
    var filtered = gNewsDataQuery.data.articles.filter(function(x) {
      return x !== undefined
    });
    console.log(filtered)
    if (filtered.length < 1) {
      const emptyText =
        emptyResults[
          Math.floor(Math.random() * Math.floor(emptyResults.length))
        ];
      setIsEmpty(emptyText);
    }
    setTopicData(filtered);
    setHeaderState("Search results...");
    await executeScroll();
  };

  const commonQuery = async (data) => {
    let wordCount = {};
    let stringsCombined = "";
    console.log(stringsCombined);
    let stringSplit = stringsCombined.split(" ");
    for (let i = 0; i < stringSplit.length; i++) {
      if (wordCount.hasOwnProperty(stringSplit[i])) {
        console.log("already there");
      } else {
        wordCount[stringSplit[i]] =
          stringsCombined.split(stringSplit[i]).length - 1;
      }
      // console.log(stringsCombined.split(stringSplit[i]).length - 1, " of ", stringSplit[i])
    }
  };

  const newsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))];
    console.log(key);
    console.log("generating news....");
    const newsData = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + key
    );
    console.log(newsData);
    for (let i = 0; i < 10; i++) {
      if (newsData.data.articles[i]) {
        top5.push(newsData.data.articles[i]);
      }
    }
    console.log(top5);
    var filtered = top5.filter(function (x) {
      return x !== undefined;
    });
    console.log(filtered);
    setTopicData(filtered);
    setHeaderState("Trending Topics");
  };

  const queryNewsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))];
    console.log(key);
    console.log("generating news....");

    // const queryNewsData = await axios.get("https://newsapi.org/v2/everything?q=" + searchQuery + "&language=en&sortBy=popularity&apiKey=" + key)
    const queryNewsData = await axios.get(
      "https://newsapi.org/v2/everything?qInTitle=" +
        searchQuery +
        "&language=en&sortBy=popularity&apiKey=" +
        key
    );
    console.log(queryNewsData);
    //filter results to include only sources in our chosen lists
    for (let i = 0; i < 10; i++) {
      top5.push(queryNewsData.data.articles[i]);
    }
    console.log(top5);

    var filtered = top5.filter(function (x) {
      return x !== undefined;
    });
    console.log(filtered);
    if (filtered.length < 1) {
      const emptyText =
        emptyResults[
          Math.floor(Math.random() * Math.floor(emptyResults.length))
        ];
      setIsEmpty(emptyText);
    }
    setTopicData(filtered);
    setHeaderState("Search results...");
  };

  useEffect(async () => {
    await gNewsApi();
  }, []);

  return (
    <Container>
      <Header />
      <Row >
          <div className='input-group pb-3 my-3 justify-content-center'>
            <form
              onSubmit={e => {
                e.preventDefault()
                gNewsApiQuery();
                
              }}
              
            >
              <div className="container">
              <input
                type="text"
                className="form-control search"
                // style={{width: "300px"}}
                placeholder="Perspectify on a topic"
                aria-label="Search for a topic"
                aria-describedby="button-addon2"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn search-button"
                style={{ fontSize: "1.25rem" }}
                type="submit"
                // onClick={() => gNewsApiQuery()}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </Row>
      <div className="container-fluid border" id="trending-section">
        <a href="#trending-section">
          <h1 className="trending pt-4 animate__animated animate__pulse">
            {headerState}
          </h1>
        </a>
        <Row className="justify-content-center">
          <Card className="keyCard" style={{ border: "solid 1px black" }}>
            <h4>Source Key</h4>
            <p>
              The coloured borders represent the type of article and/or the
              ideological leaning of the source. <br /> See{" "}
              <Link to="/about">About</Link> page for more information.
            </p>
            <Container>
              <Row className="sourceKey">
                <Col size="3">
                  <h6>
                    <FaNewspaper style={{ color: "pink" }} /> Very Liberal
                  </h6>
                  <h6>
                    <FaNewspaper style={{ color: "yellow" }} /> Skews Liberal
                  </h6>
                </Col>
                <Col size="3">
                  <h6>
                    <FaNewspaper style={{ color: "green" }} /> Centrist
                  </h6>
                  <h6>
                    <FaNewspaper style={{ color: "orange" }} /> Skews Conservative
                  </h6>
                </Col>
                <Col size="3">
                  <h6>
                    <FaNewspaper style={{ color: "purple" }} /> Very Conservative
                  </h6>
                  <h6>
                    <FaNewspaper style={{ color: "red" }} /> Sports
                  </h6>
                </Col>
                <Col size="3">
                  <h6>
                    <FaNewspaper style={{ color: "turquoise" }} /> Technology
                  </h6>
                  <h6>
                    <FaNewspaper style={{ color: "grey" }} /> Not Available
                  </h6>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
        {/* <button onClick={() => newsApi()}> Generate News </button> */}
        <Row>
          <div ref={myRef}>
            {topicData.map(item => {
                 if (item) {
                  return (
                    <div className='topics'>
                      <Article
                        trending={topicData}
                        query={searchQuery}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        image={item.image}
                        date={item.publishedAt.substr(0,10)}
                        source={item.source.name}
                      />
                    </div>
                  )
                } else {return(<div ref={myRef}></div>)}
            })}
          </div>
          <h2>
            <br></br>
            {isEmpty}
            <br></br>
          </h2>
        </Row>
      </div>
      {/* <iframe
        width='768'
        height='432'
        src='https://www.youtube.com/embed/FvWiCclESL8'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe> */}
    </Container>
  );
};

export default Trending;
