import React  from "react";
//first curlybraces is javascript and the second is for css//
// import NewsyItem from "./NewsyItem";
const NewsItem = (props) => {
  let { title, discription, imgUrl, newUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "22rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={imgUrl ? imgUrl : "https://images.wsj.net/im-759197/social"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              {!author ? "Unknown" : author} {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newUrl} target="__blank" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
