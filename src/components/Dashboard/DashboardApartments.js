
import React, { Component } from "react";

import GoogleMapsForm from '../Services/GoogleMapsForm';

class DashboardApartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: []
    };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/apartments`, {
    method: 'GET'
  })
  .then((results) => {
    results.json().then((apartments_data) => {
      this.setState({apartments: apartments_data});
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

render(){
  return(
  <div>
    <div className="aptContainer">
      {this.state.apartments.map((apartment) => {
        return(
          <div key={apartment.id} className="aptCard">
            <h4>{apartment.title}</h4>
            <img className="aptPhoto" src={apartment.photo} />
            <div><strong>Address</strong></div>
            <div>{apartment.address}</div>
            <div><strong>Rent</strong></div>
            <div>$ {apartment.rent}</div>
            <div><strong>Description</strong></div>
            <div>{apartment.description}</div>
            <div><strong>Contact</strong></div>
            <div><a href={"mailto:" + apartment.email}>Email</a></div>
            <GoogleMapsForm className="map" address={apartment.address}/>
          </div>
        );
      })}
    </div>
  </div>
  );
  }
}

export default DashboardApartments;
