import {useState, useEffect, React} from 'react'
import axios from 'axios'
import newsApiKeys from '../../config/apikeys'
import Carousel from "../Carousel/Carosel";
import "./ArticleDiscussionPage.css";

const ArticleDiscussionPage = (props) => {
  const [comment, setComment] = useState([{ commentMessage: "test111" }]);
  const [articleData, setArticleData] = useState([]);
  const [activeArticle, setActiveArticle] = useState('')
  const top5 = []

  const queryNewsApi = async () => {
    const key = newsApiKeys[Math.floor(Math.random() * Math.floor(newsApiKeys.length))]
    console.log(key)
    console.log("generating news....")


    // const queryNewsData = await axios.get("https://newsapi.org/v2/everything?q=" + searchQuery + "&language=en&sortBy=popularity&apiKey=" + key)
    const queryNewsData = await axios.get("https://newsapi.org/v2/everything?qInTitle=" + props.location.state.query + "&language=en&sortBy=popularity&apiKey=" + key)
    console.log(queryNewsData)
    for (let i = 0; i < 5; i++) {
      top5.push(queryNewsData.data.articles[i])
    }
    console.log(top5)
    setArticleData(top5)
    setActiveArticle(props.location.state.url)
  }

  const getComments = async () => {
    try {
    const res = await axios.get('/api/v1/comments', {params: {topic: props.location.state.query}});
    } catch (error) {
    
    
    }
  }

  const addComments = async () => {
    try {
    const res = await axios.post('/api/v1/comments');
    
    } catch (error) {
      
    }
  }

  useEffect(async () => {
    await queryNewsApi();
    
  }, []) 

  const handelChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...comment];
    list[index][name] = value;

    setComment(list);
  };
  const handelAddInput = () => {
    setComment([...comment, { commentMessage: "" }]);
    getComments();
  };

  const handelRemoveInput = (index) => {
    const list = [...comment];
    list.splice(index, 1);
    setComment(list);
  };

  return (
    <div>
      <div className="articleSection">
        <h2>Article Title</h2>
        <div className="articleBlock">Article Content</div>
      </div>
      <div>
        <h2>Leave Your Comment</h2>
      </div>

      {comment.map((item, i) => {
        return (
          <div key={i} className="textBox">
            <form>
              <textarea
                name="commentMessage"
                placeholder="comment"
                className="mr10"
                row="3"
                id="commentText"
                value={item.commentMessage}
                onChange={(e) => handelChange(e, i)}
              />
              <input
                type="button"
                value="Add"
                className="mr10"
                onClick={handelAddInput}
              />
              <input
                type="button"
                value="Reomve"
                onClick={(e) => handelRemoveInput(i)}
              />
            </form>
          </div>
        );
      })}
      <Carousel data={articleData}/>
    </div>
  );
}

export default ArticleDiscussionPage;
