import React, { Component } from 'react'

export class NewsItam extends Component {

  render() {
    let {tital, description, imageUrl, newsUrl} = this.props;
    return (

      <>
        <div className="card" style={{ width: "18rem" }}>
  <img src={ !imageUrl?"https://www.gannett-cdn.com/presto/2021/08/31/USAT/52b608a7-c951-41a4-85d5-290524bb3be5-2021_Kia_Telluride_Nightfall_Edition.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp":imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{tital}</h5>
    <p className="card-text">
      {description}
    </p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">
      Read More
    </a>
  </div>
</div>


      </>
    
       
 

    )
  }
}

export default NewsItam
