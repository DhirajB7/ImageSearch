import React, { Component } from 'react'
import './App.css';
import Search from './Components/Search';
import getImagesByName from './Api/Unsplash';
import ImageList from './Components/ImageList';
import Header from './Components/Header';



class App extends Component {


  state = {images : []}


   onSearch =  (paramName) => {
     
    getImagesByName(paramName).then((res)=>{
      this.setState({
        images:res.data.results
      })
    })

  }

  render() {
    return (
      <div className="ui container App" style={{marginTop:'70px'}}>
        <Header className="Header"/>
        <br/>
        <Search search = {this.onSearch}/>
        <br/>
        <ImageList images = {this.state.images}/>
      </div>
      );
  }
}


export default App;
