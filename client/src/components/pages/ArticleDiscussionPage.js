import React, { useEffect, useState } from "react";
import Carosel from "../Carousel/Carosel";
import "./ArticleDiscussionPage.css";

function ArticleDiscussionPage() {
  const [comment, setComment] = useState([{ commentMessage: "test111" }]);

  const handelChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...comment];
    list[index][name] = value;

    setComment(list);
  };
  const handelAddInput = () => {
    setComment([...comment, { commentMessage: "" }]);
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
      <Carosel />
    </div>
  );
}

export default ArticleDiscussionPage;
