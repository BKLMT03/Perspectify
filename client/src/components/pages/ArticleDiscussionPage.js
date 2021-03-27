import { useState, useEffect, React } from 'react'
import axios from 'axios'
import newsApiKeys from '../../config/apikeys'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from '../Carousel/Carosel'
import './ArticleDiscussionPage.css'

const ArticleDiscussionPage = props => {
  const [comment, setComment] = useState([{ commentMessage: 'test111' }])
  const [comments, setComments] = useState([])
  const [articleData, setArticleData] = useState([])
  const [activeArticle, setActiveArticle] = useState('')
  const top5 = []

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
    setActiveArticle(props.location.state.url)
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
    try {
      const res = await axios.post('/api/v1/comments')
    } catch (error) {}
  }

  useEffect(async () => {
    await queryNewsApi()
    await getComments()
  }, [])

  const handelChange = (e, index) => {
    const { name, value } = e.target

    const list = [...comment]
    list[index][name] = value

    setComment(list)
  }
  const handelAddInput = () => {
    setComment([...comment, { commentMessage: '' }])
    getComments()
  }

  const handelRemoveInput = index => {
    const list = [...comment]
    list.splice(index, 1)
    setComment(list)
  }

  return (
    <Container className="mt-5">
      <div>

        <Row className='justify-content-center'>
          <div className='articleSection'>
            <h2>Article Title</h2>
            <div className='articleBlock'>Article Content</div>
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
              // onChange={(e) => handelChange(e, i)}
            />
            <input
              type='button'
              value='Add'
              className='mr10'
              // onClick={handelAddInput}
            />
            <input
              type='button'
              value='Remove'
              // onClick={(e) => handelRemoveInput(i)}
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
