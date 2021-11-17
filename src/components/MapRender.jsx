import React, { Component } from 'react'
import Map from './Map';

const URL = 'ws://localhost:4000'
export default class MapRender extends Component {
    state = {
        issData: {},
        center: {lat: 42.3265, lng: -122.8756},
        flightPlanCoordinates: []
    }
    ws = new WebSocket(URL)

    componentDidMount() {
        this.fetchIssPositionData();
        this.ws.onopen = (event) => {
            console.log('Web Socket connection estiblished!');
        }

        this.ws.onmessage = (event) => {
            console.log('New msg : ', event.message);
            this.fetchIssPositionData();
        }

        setInterval(() => {
            this.ws.send('Message from frontend')
        }, 10000)
    }

    updateISSData = data => this.setState(state => ({ issData: data}))
    updateISSDataCenter = data => this.setState(state => ({ center: {lat: data.latitude, lng: data.longitude }}));
    addLatLngs = data => this.setState(state => ({ flightPlanCoordinates: [{lat: data.latitude, lng: data.longitude }, ...state.flightPlanCoordinates] }))
    fetchIssPositionData() {
        fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(response => {
            console.log('Api rsp :: ', response);
            this.updateISSData(response);
            this.updateISSDataCenter(response);
            this.addLatLngs(response);
        })
        .catch(err => {
          console.log(err);
        });
      }
    render() {
        return (
            <div>
                <Map center={this.state.center} triangleCoords={this.state.flightPlanCoordinates}/>
            </div>
        )
    }
}
