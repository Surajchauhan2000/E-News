import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import NewsyItem from "./NewsyItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import userEvent from '@testing-library/user-event';
const News = (props) => {
  // to use the props type we use the static variable

  const [loading, setLoading] = useState(true);   // loads ? spinner
  const [page, setPage] = useState(1);  // single pages
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  
  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    
    // refactring of the code in one function
  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);    // to make youtube red line going on
    let parsedData = await data.json();
    props.setProgress(70);
    
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
};

// we can use the useEffect instead of using componentDidMount->to set the component
useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} - Daily News`; 
    update();
    // eslint-disable-next-line 
  },[])

  // if you use the the button then instead of using prev and next i will use the infinite scroll bar
  //  const handelPrev=async()=>{
  //     setPage(page-1);
  //     update();
  //  }

  //  const handelNext=async()=>{
  //     setPage(page+1);
  //     update();
  //  }

  const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;  // so page fetch after some milisecond thats why we can increment page+1
      

      setPage(page + 1); // fetch the data =>add+1 into pages

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles)); // all the data come one by one into infinite forms so that concat
    setTotalResults(parsedData.totalResults);
  };
  // when your this.state.loading is true then show to spinner else not//
  return (
    <>
      <h1 className="text-center" style={{ margin: '35px,0px' , marginTop:'90px'}}>Daily-News - Top {`${capitalizeFirstLetter(props.category)}`} Headlines
      </h1>
      
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?articles.length:0}
        next={fetchMoreData}
        hasMore={articles&&articles.length !== totalResults} // is your total data came or still waiting for the data
        loader={<Spinner />}

        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      >
        <div className="container">
          <div className="row my-3">
            {articles&& articles.map((element) => {
              return ( 
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    discription={element.description}
                    imgUrl={element.urlToImage}
                    newUrl={element.url}
                    author={element.author} 
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrev}>&larr;Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNext}>Next&rarr;</button>
        </div> */}
    </>
  );
};

// when you set state then (this.setState(then set)) not equal to use otherwise not working

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "sports",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
