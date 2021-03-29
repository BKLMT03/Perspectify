import { useState, useEffect, React } from 'react'
import axios from 'axios'
import Article from '../Article'
import Container from '../Container'
import Header from '../Header'
import Row from "react-bootstrap/Row"
import news from '../../testnewsdata'
import newsApiKeys from '../../config/apikeys'
import './style.css'

const Trending = props => {
  const [topicData, setTopicData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [headerState, setHeaderState] = useState('Trending Topics')
  const topics = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
    'general'
  ]
  const top5 = []
  const superLeft = ['Salon', 'Daily Beast', 'Black Lives Matter', 'Slate','Think Progress'];
  const midLeft = ['CNN', 'New Yorker', 'BBC', 'Politico', 'CBS', 'Washington Post', 'The Guardian', 'Huffington Post'];
  const center = ['Reuters', 'Al Jazeera', 'Time', 'Economist', 'Bloomberg', 'Associated Press', 'Los Angeles Times', 'ABC News', 'NPR', 'CSPAN'];
  const midRight = ['The Hill', 'Russia Today', 'Fox News', 'New York Post', 'Epoch Times', 'Daily Mail'];
  const superRight = ['The Blaze', 'OANN', 'News Max', 'Daily Caller', 'Breitbart News', 'Drudge Report'];
  // const arr = news;
  //line 12 is static news data imported from testnewsdata

  const newsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))]
    console.log(key)
    console.log('generating news....')
    const newsData = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key
    )
    console.log(newsData)
    for (let i = 0; i < 20; i++) {
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
    for (let i = 0; i < 5; i++) {
      top5.push(queryNewsData.data.articles[i])
    }
    console.log(top5)

    var filtered = top5.filter(function(x) {
      return x !== undefined;
    });
    console.log(filtered)
    setTopicData(filtered)
    setHeaderState('Search results...')
  }

  useEffect(async () => {
  await newsApi();  
  }, [])

  return (
    <Container>
      <Header />
      <Row >
          <div className='input-group pb-3 my-3 justify-content-center'>
            <form
              onSubmit={e => {
                e.preventDefault()
                queryNewsApi()
              }}
            >
              <div className="container">
              <input
                type='text'
                className='form-control search'
                placeholder='Search for a topic'
                aria-label='Search for a topic'
                aria-describedby='button-addon2'
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button
                className='btn btn-outline-secondary mt-3'
                type='button'
                id='button-addon2'
                onClick={() => queryNewsApi()}
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
                        query={searchQuery}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        image={item.urlToImage}
                        date={item.publishedAt.substr(0,10)}
                      />
                    </div>
                  )
                } 
            })}
          </div>
        </Row>
      </div>
    </Container>
  )
}

export default Trending
