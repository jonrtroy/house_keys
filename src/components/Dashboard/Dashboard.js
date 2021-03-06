import React, { Component } from "react";
import { Link } from "react-router";

// 

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/apartments/1/newApt', {
      method: 'GET',
    })
    .then((results) => {
      results.json().then((apartments_data) => {

        this.setState({apartments: apartments_data})
      });
    })
    .catch((err) => {

    });
  }

  render(){
    return(
      <div>
        <nav>
          <h1> Welcome, Rachel</h1>
        </nav>
        <div className="container">
          <div className="row">
          {this.state.apartments.map((apartment) => {
            return(
            <div key={apartment.id} className="">
            <div>
              <h2>Gender: {apartment.address}</h2>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
    )
  }
}

export default Dashboard;
