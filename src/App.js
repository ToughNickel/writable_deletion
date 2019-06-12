import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import 'js-cookie';
import './App.css';
import './bootstrap.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appVolumesManagerURL: '',
      userName: '',
      userPassword: '',
    }
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  onFieldChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleLogin = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('username', this.state.userName);
      formData.append('password', this.state.userPassword);

      let data = [this.state.appVolumesManagerURL];
      //session setup 
      fetch(this.state.appVolumesManagerURL+'/cv_api/sessions', {
        header:{
          'Access-Control-Allow-Origin':'',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'no-cors',
        credentials: 'include',
        body: formData
      });
      //-------------
      this.props.history.push({
        pathname: '/delete-writable',
        data: data
      });
  }

  render() {
    return (
      <div className="App">
        <div className = "container">
          <form className="form-group" onSubmit={this.handleLogin} >
            <div className="form-group">
                <input type="text" className = "form-control form-control-lg" name="appVolumesManagerURL" value={this.state.appVolumesManagerURL} 
                placeholder = "AppVolumes Manager URL" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
                <input type="text" className = "form-control form-control-lg" name="userName" value={this.state.userName} 
                placeholder = "User Name" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
                <input type="password" className = "form-control form-control-lg" name="userPassword" value={this.state.userPassword} 
                placeholder = "Password" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary form-control-lg" value = "Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
