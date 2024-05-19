import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,imageurl,newsurl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={imageurl?imageurl:"https://i.abcnewsfe.com/a/f5f45619-d567-4ed2-9088-3d9a07629e15/nikki-haley-gty-lv-240204_1707066346956_hpMain_16x9.jpg?w=1600"} alt="Card image cap"/>
        <div className="card-body">
         <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
    </div>
</div>
      </div>
    )
  }
}

//by using target="_blank it will open that link in new tab"

export default NewsItem
