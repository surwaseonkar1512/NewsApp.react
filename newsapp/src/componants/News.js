import React, { Component } from 'react'
import NewsItam from './NewsItam'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  
  static propTypes = {
    
    country: PropTypes.string ,
    pageSize: PropTypes.number,
    category: PropTypes.string
    
  }

  articles = [ 
     
     

 

]
    
  constructor(){
    super();
    this.state={
      articles: this.articles,
      page:1

    }
  }

  async componentDidMount(){console.log("cdn");
   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8752e5baf874f948e32b5faa70cf934&page=1&pageSize=20`;
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
   this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})

}
    handlePrevClick = async ()=>{
     console.log("prev");
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8752e5baf874f948e32b5faa70cf934&page=${this.state.page - 1}&pageSize=20`;
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     
  


     this.setState({
       page: this.state.page - 1,
       articles: parsedData.articles
     })
     


 




    }

    handleNextClick = async ()=>{
       
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

      }
        else{

          let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8752e5baf874f948e32b5faa70cf934&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      
   


      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
      }    
      
    }



  render() {
    return (
      <>
      <div className='container my-4 '>
       <h2> News ok top headline </h2>
        <div className='row'>
       {this.state.articles.map((element)=>{
        return <div className="col-md-6" key={element.url}>
             <NewsItam title={element?element.title :""} description={element?element.description:""} imageUrl={element?element.urlToImage :""} newsUrl={element.url} />
            </div>
          })}  
        </div>
      </div>
        <div className="container mx-5 my-6 py-10 px-4 my-6 d-flex justify-content-between" >
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark  " onClick={this.handlePrevClick}> &larr; prev</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark "  onClick={this.handleNextClick}> next &rarr;</button>  
        </div>
      </>
    )
  }
}

export default News
