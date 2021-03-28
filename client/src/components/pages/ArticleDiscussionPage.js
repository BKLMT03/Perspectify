import { useState, useEffect, React } from 'react'
import axios from 'axios'
import newsApiKeys from '../../config/apikeys'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from '../Carousel/Carosel'
import './ArticleDiscussionPage.css'
import { set } from 'mongoose'

const ArticleDiscussionPage = props => {
  const [currentComment, setCurrentComment] = useState('')
  const [comments, setComments] = useState([])
  const [articleData, setArticleData] = useState([])
  const [activeArticleUrl, setActiveArticleUrl] = useState('')
  const [activeArticleTitle, setActiveArticleTitle] = useState();
  const [activeArticleContent, setActiveArticleContent] = useState();
  const top5 = [];

  const getArticleData = async () => {
    console.log(props.location.state.url)
    const res = await axios.get('/api/v1/articles', {params: {query: props.location.state.url}} );
    setActiveArticleTitle(res.data.data.title)
    setActiveArticleContent(res.data.data.content)
  }

  const queryNewsApi = async () => {
    const key =
      newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))]
    console.log(key)
    console.log('generating news....')

    // const queryNewsData = await axios.get("https://newsapi.org/v2/everything?q=" + searchQuery + "&language=en&sortBy=popularity&apiKey=" + key)
    const queryNewsData = await axios.get(
      'https://newsapi.org/v2/everything?qInTitle=' +
        props.location.state.query +
        '&language=en&sortBy=popularity&apiKey=' +
        key
    )
    console.log(queryNewsData)
    for (let i = 0; i < 5; i++) {
      top5.push(queryNewsData.data.articles[i])
    }
    console.log(top5)
    setArticleData(top5)
    setActiveArticleUrl(props.location.state.url)
  }

  const getComments = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    try {
    console.log(props.location.state.query)
    const res = await axios.get('/api/v1/comments', {params: {topic: props.location.state.query}} );
    // const res = await axios.get('/api/v1/comments');
    if (res.data.message === "No comments regarding this topic to show!") {
      setComments([res.data.message])
    } else {
      setComments(res.data.data);
    }
    
    
    } catch (error) {
    
    
    }
    console.log(comments[0])
  }

  const addComments = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/comments', {
        topic: props.location.state.query.toLowerCase(),
        name_first: "Chris",
        name_last: "Brown",
        text: currentComment
      }, config)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    await queryNewsApi()
    await handleRemoveInput();
    await getComments()
    await getArticleData();
  }, [])

  const handleChange = (e, index) => {
    setCurrentComment(e.target.value)
  }

  const handleAddInput = () => {
    addComments();
    getComments();
  }

  const handleRemoveInput = () => {
    setCurrentComment('');
  }

  // new DOMParser().parseFromString(activeArticleContent, "text/xml")

  return (
    <Container className="mt-5">
      <div>

        <Row className='justify-content-center'>
          <div className='articleSection'>
            <h2>{activeArticleTitle}</h2>
            <div className='articleBlock'>
            <div dangerouslySetInnerHTML={{__html: activeArticleContent}} />
            </div>
            {/* add {activeArticleContent} inside above div to show scraped article} */}
          </div>
        </Row>
        <Carousel data={articleData} />

        <Row>
          <div>
            <h2>Discuss</h2>
          </div>
        </Row>
        <div className='textBox'>
          {/* add key={i} next to class name above */}
          <form>
            <textarea
              name='commentMessage'
              placeholder='comment'
              className='mr10'
              row='3'
              id='commentText'
              // value={item.commentMessage}
              onChange={(e) => handleChange(e)}
            />
            <input
              type='button'
              value='Add'
              className='mr10'
              onClick={handleAddInput}
            />
          </form>
        </div>

        {comments.map((item, i) => {
          if (comments[0] === "No comments regarding this topic to show!") {
            return (
              <div>
                <p> {"No comments regarding this topic to show!"} </p>
              </div>
            )
          } else {
            return (
              <div key={i}>
                <p>
                  Name: {item.name_first} {item.name_last}{' '}
                </p>
                <p>Date: {item.createdAt} </p>
                <p>{item.text}</p>
              </div>
            )
          }
          
        })}
      </div>
    </Container>
  )
}

export default ArticleDiscussionPage
