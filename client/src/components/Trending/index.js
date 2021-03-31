import { useState, useEffect, React } from 'react'
import axios from 'axios'
import Article from '../Article'
import Container from '../Container'
import Header from '../Header'
import Row from "react-bootstrap/Row"
import news from '../../testnewsdata'
import Particles from "react-particles-js"
// import newsApiKeys from '../../config/apikeys'
// import stockApiKeys from '../../config/apikeys2'
import './style.css'


const Trending = props => {
  const [stockData, setStockData] = useState();
  const [topicData, setTopicData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [headerState, setHeaderState] = useState('Trending Topics')
  const [isEmpty, setIsEmpty] = useState('')
  const NEWS_KEY_ONE = process.env.REACT_APP_NEWS_KEY_ONE;
  const NEWS_KEY_TWO = process.env.REACT_APP_NEWS_KEY_TWO;
  const NEWS_KEY_THREE = process.env.REACT_APP_NEWS_KEY_THREE;
  const NEWS_KEY_FOUR = process.env.REACT_APP_NEWS_KEY_FOUR;
  const NEWS_KEY_FIVE = process.env.REACT_APP_NEWS_KEY_FIVE;
  const NEWS_KEY_SIX = process.env.REACT_APP_NEWS_KEY_SIX;
  const newsApiKeys = [NEWS_KEY_ONE, NEWS_KEY_TWO, NEWS_KEY_THREE, NEWS_KEY_FOUR, NEWS_KEY_FIVE, NEWS_KEY_SIX]
  /////////////////////////////////////////////////////////
  const GNEWS_KEY_ONE = process.env.REACT_APP_GNEWS_KEY_ONE
  const GNEWS_KEY_TWO = process.env.REACT_APP_GNEWS_KEY_TWO
  const GNEWS_KEY_THREE = process.env.REACT_APP_GNEWS_KEY_THREE
  const GNEWS_KEY_FOUR = process.env.REACT_APP_GNEWS_KEY_FOUR
  const GNEWS_KEY_FIVE = process.env.REACT_APP_GNEWS_KEY_FIVE
  const GNEWS_KEY_SIX = process.env.REACT_APP_GNEWS_KEY_SIX
  const GNEWS_KEY_SEVEN = process.env.REACT_APP_GNEWS_KEY_SEVEN
  const GNEWS_KEY_EIGHT = process.env.REACT_APP_GNEWS_KEY_EIGHT
  const gApiKeys = [GNEWS_KEY_ONE, GNEWS_KEY_TWO, GNEWS_KEY_THREE, GNEWS_KEY_FOUR, GNEWS_KEY_FIVE, GNEWS_KEY_SIX, GNEWS_KEY_SEVEN, GNEWS_KEY_EIGHT]
  ////////////////////////////////////////////////////////
  console.log(gApiKeys)
  ////////////////////////////////////////////////////////
  const topics = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
    'general'
  ]
  const emptyResults = ['That is a lot of empty....', 'Nothing to see here....', 'I think someone messed up', 'Do you even search bro...', 'Awks', 'Smells like teen spirit....and a bad search query', "Couldn't think of anything better eh?", "*sad violin plays softly*"]
  const top5 = []
  const superLeft = ['Salon', 'Daily Beast', 'Black Lives Matter', 'Slate','Think Progress'];
  const midLeft = ['CNN', 'New Yorker', 'BBC', 'Politico', 'CBS', 'Washington Post', 'The Guardian', 'Huffington Post'];
  const center = ['Reuters', 'Al Jazeera', 'Time', 'Economist', 'Bloomberg', 'Associated Press', 'Los Angeles Times', 'ABC News', 'NPR', 'CSPAN'];
  const midRight = ['The Hill', 'Russia Today', 'Fox News', 'New York Post', 'Epoch Times', 'Daily Mail'];
  const superRight = ['The Blaze', 'OANN', 'News Max', 'Daily Caller', 'Breitbart News', 'Drudge Report'];
  // const arr = news;
  //line 12 is static news data imported from testnewsdata

  const hoaxyApi = async () => {
    const options = {
      method: 'GET',
      url: 'https://api-hoaxy.p.rapidapi.com/articles',
      params: {
        query: searchQuery + ' AND date_published:[2016-10-28 TO 2016-12-04]',
        sort_by: 'relevant',
        use_lucene_syntax: 'true'
      },
      headers: {
        'x-rapidapi-key': '069b892a66msh2d995309be35fddp16e393jsnbb12494f3f8d',
        'x-rapidapi-host': 'api-hoaxy.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  // const stockApi = async () => {
  //   const stockSymbol = 'GME';
  //   const stockQuery = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stockSymbol +'&interval=5min&apikey=' + stockApiKeys[0])
  //   console.log(stockQuery.data["Time Series (5min)"])
  // }

  const gNewsApi = async () => {
    const key =
    gApiKeys[Math.floor(Math.random() * Math.floor(gApiKeys.length))]
    console.log(key)
    console.log('generating news....')
    const gNewsData = await axios.get("https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=" + key)
    console.log(gNewsData)
    setTopicData(gNewsData.data.articles)
  }

  const gNewsApiQuery = async () => {
    const key =
    gApiKeys[Math.floor(Math.random() * Math.floor(gApiKeys.length))]
    console.log(key)
    console.log('generating news....')
    //&in=title &in=description &in=content &country=us &country=ca
    const gNewsDataQuery = await axios.get("https://gnews.io/api/v4/search?q=" + searchQuery + "&language=en&country=us&sortby=relevance&token=" + key)
    console.log(gNewsDataQuery.data.articles)
    var filtered = gNewsDataQuery.data.articles.filter(function(x) {
      return x !== undefined;
    });
    console.log(filtered)
    if (filtered.length < 1) {
      const emptyText =
      emptyResults[Math.floor(Math.random() * Math.floor(emptyResults.length))]
      setIsEmpty(emptyText);
    }
    setTopicData(filtered)
    setHeaderState('Search results...')
  }

  const newsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))]
    console.log(key)
    console.log('generating news....')
    const newsData = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key
    )
    console.log(newsData)
    for (let i = 0; i < 10; i++) {
      if (newsData.data.articles[i] ) {
        top5.push(newsData.data.articles[i])
      }
    }
    console.log(top5)
    var filtered = top5.filter(function(x) {
      return x !== undefined;
   });
   console.log(filtered)
    setTopicData(filtered)
    setHeaderState('Trending Topics')
  }

  const queryNewsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))]
    console.log(key)
    console.log('generating news....')

    // const queryNewsData = await axios.get("https://newsapi.org/v2/everything?q=" + searchQuery + "&language=en&sortBy=popularity&apiKey=" + key)
    const queryNewsData = await axios.get('https://newsapi.org/v2/everything?qInTitle=' + searchQuery + '&language=en&sortBy=popularity&apiKey=' + key)
    console.log(queryNewsData)
    //filter results to include only sources in our chosen lists
    for (let i = 0; i < 10; i++) {
      top5.push(queryNewsData.data.articles[i])
    }
    console.log(top5)

    var filtered = top5.filter(function(x) {
      return x !== undefined;
    });
    console.log(filtered)
    if (filtered.length < 1) {
      const emptyText =
      emptyResults[Math.floor(Math.random() * Math.floor(emptyResults.length))]
      setIsEmpty(emptyText);
    }
    setTopicData(filtered)
    setHeaderState('Search results...')
  }

  useEffect(async () => {
  await newsApi();
  
  }, [])

  return (
    <Container>
      <Header />
      <button onClick={gNewsApi}>Test</button>
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
                type='text'
                className='form-control search'
                // style={{width: "300px"}}
                placeholder='Perspectify on a topic'
                aria-label='Search for a topic'
                aria-describedby='button-addon2'
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button
                className='btn search-button'
                style={{fontSize: "1.25rem"}}
                type="submit"
                // onClick={() => gNewsApiQuery()}
              >
                Search
              </button>

              </div>
              
              
            </form>
          </div>
        </Row>
      <div className='container-fluid border shadow'>
        <h1 className='trending pt-3'>{headerState}</h1>
        
        {/* <button onClick={() => newsApi()}> Generate News </button> */}
        <Row>
          <div>
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
                }
            })}
          </div>
          <h2><br></br>{isEmpty}<br></br></h2>
        </Row>
      </div>
      <iframe width="768" height="432" src="https://www.youtube.com/embed/FvWiCclESL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Container>
  )
}

export default Trending
