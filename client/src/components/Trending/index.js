import { useState, useEffect, React } from 'react'
import axios from 'axios'
import Article from '../Article'
import Container from '../Container'
import Header from '../Header'
import Row from '../Row'
import news from '../../testnewsdata'
import newsApiKeys from '../../config/apikeys'
import './style.css'

const Trending = props => {
  const [topicData, setTopicData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
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
    for (let i = 0; i < 5; i++) {
      top5.push(newsData.data.articles[i])
    }
    console.log(top5)
    setTopicData(top5)
  }

  const queryNewsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))]
    console.log(key)
    console.log('generating news....')

    // const queryNewsData = await axios.get("https://newsapi.org/v2/everything?q=" + searchQuery + "&language=en&sortBy=popularity&apiKey=" + key)
    const queryNewsData = await axios.get(
      'https://newsapi.org/v2/everything?qInTitle=' +
        searchQuery +
        '&language=en&sortBy=popularity&apiKey=' +
        key
    )
    console.log(queryNewsData)
    for (let i = 0; i < 5; i++) {
      top5.push(queryNewsData.data.articles[i])
    }
    console.log(top5)
    setTopicData(top5)
  }

  // useEffect(async () => {

  // }, [])

  return (
    <Container>
      <Header />
      <div className='container-fluid border shadow'>
        <h1 className='trending pt-3'>Trending Topics</h1>
        <button onClick={() => newsApi()}> Generate News </button>
        <Row>
          <div>
            {topicData.map(item => {
              return (
                <div className='topics'>
                  <Article
                    query={searchQuery}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    image={item.urlToImage}
                    date={item.publishedAt}
                  />
                </div>
              )
            })}
          </div>
        </Row>

        <div class='container input-group pb-3 my-3'>
          <form
            onSubmit={e => {
              e.preventDefault()
              queryNewsApi()
            }}
          >
            <input
              type='text'
              class='form-control'
              placeholder='Search for a topic'
              aria-label='Search for a topic'
              aria-describedby='button-addon2'
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button
              class='btn btn-outline-secondary'
              type='button'
              id='button-addon2'
              onClick={() => queryNewsApi()}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Trending
