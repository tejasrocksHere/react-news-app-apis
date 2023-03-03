import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './componets/Navbar';
import News from './componets/News';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { reRenderKey: 0 };
  }
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      
      />
        <Switch>
          <Route exact path="/">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="general" />
          </Route> 
          <Route exact path="/business">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="business" />
          </Route> 
          <Route exact path="/entertainment">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="entertainment" />
          </Route> 
          <Route exact path="/general">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="general" />
          </Route> 
          <Route exact path="/health">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="health" />
          </Route> 
          <Route exact path="/science">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="science" />
          </Route> 
          <Route exact path="/sports">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="sports" />
          </Route> 
          <Route exact path="/technology">
            <News setProgress={this.setProgress} key={this.state.reRenderKey} pageSize={5} country="in" category="technology" />
          </Route> 
        </Switch>
      </Router>
    );
  }
}
