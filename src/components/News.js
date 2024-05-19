import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {
    // static defaultProps={
    //     country:'in',
    //     pageSize:8,
    //     category:'general'
    //   }

    //   static PropTypes={
    //     country:PropTypes.string,
    //     pageSize:PropTypes.number,
    //     category:PropTypes.string
    //   }
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    //we use constructor to set the state
    //we can change state dynamically but not the props,
    //if we want to dynamically change the props, then we have to create state using that props


    async componentDidMount(){
        console.log(this.props.pageSize)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4c588a7554f444c696e6bdf3f5ce7ee3&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        //this is used for fetching live data
        let parseData=await data.json()
        console.log(parseData.totalResults)
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})
        //function used to set the state
    }
    //this runs after compete running of render

     handlenextclick=async()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4c588a7554f444c696e6bdf3f5ce7ee3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        //this is used for fetching live data
        let parseData=await data.json()
        
        this.setState(
            {
                page:this.state.page+1,
                articles:parseData.articles,
                loading:false
            }
        )}
    }

    handleprevclick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4c588a7554f444c696e6bdf3f5ce7ee3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        //this is used for fetching live data
        let parseData=await data.json()
        
        this.setState(
            {
                page:this.state.page-1,
                articles:parseData.articles,
                loading:false
            }
        )
    }

  render() {
    return (
        
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey-Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
             return <div className='col-md-4' key={element.url}>
            <NewsItem  title={ (element.title? element.title.slice(0,30):"")} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url}></NewsItem>
            </div>
            
        } )
        }
        {/* we have to provide unique key to each child */}
         </div> 
       
       
       <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handleprevclick}> &larr; Previous</button>
        {/* //disabeled is used to disable the button */}
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handlenextclick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}

export default News
