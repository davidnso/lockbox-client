import React, { Component } from "react";
import {Timeline, TimelineEvent} from 'react-event-timeline'
import axios from 'axios';
import "./dashboard.css";

const CSS_String = 'margin-top:50px;'
const options = {
    width: '100%',
    height: '450px',
    stack: true,
    showMajorLabels: true,
    showCurrentTime: true,
    zoomMin: 1000000,
    type: 'box',
    format: {
      minorLabels: {
        millisecond:'SSS',
        second:     's',
        minute:     'HH:mm',
        hour:       'HH:mm',
        weekday:    'ddd D',
        day:        'D',
        month:      'MMM',
        year:       'YYYY'
      },
      majorLabels: {
        millisecond:'HH:mm:ss',
        second:     'D MMMM HH:mm',
        minute:     'ddd D MMMM',
        hour:       'ddd D MMMM',
        weekday:    'MMMM YYYY',
        day:        'MMMM YYYY',
        month:      'YYYY',
        year:       ''
      }
    },
    style: CSS_String
  }
  let items = [{
    start: new Date(2010, 7, 15),
    content: 'Entry: David Nsoesie',
  },
  {
    start: new Date(2010, 7, 15),
    content: 'Trajectory A',
  },{
    start: new Date(2010, 7, 17),
    content: 'Trajectory A',
  }]

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "David",
      tickets: 4,
      building: "Thurgood",
      buildingList: [
        "Towers",
        "The Colonies",
        "Lucretia Kennard Hall",
        "Harriet Tubman Hall"
      ],
      items: [],
      selected: 0
    };
  }

  componentDidMount(){
    this.fetchOnLoad().then(()=>{})
  }

  async fetchOnLoad(){
    await Promise.all([
      axios.get('http://localhost:4100/service').then(apiResponse=>{
      this.setState({tickets: apiResponse.data.tickets.length ?apiResponse.data.tickets.length: 0 });
      console.log(apiResponse.data.tickets.length);
    }),
    axios.get('http://localhost:4100/buildings').then(apiResponse=>{
      // this.setState({buildingList: apiResponse.data.buildings})
      this.setState({building: apiResponse.data.buildings[0].name});
      this.setState({buildingList: apiResponse.data.buildings});
      console.log(apiResponse.data.buildings[0].name);
    }),
    axios.get(`http://localhost:4100/buildings/5d881a2b1c9d440000c7dd0d/logs`).then(apiResponse=>{
      const logs = apiResponse.data.logs
      const items = logs.map(log=>{
        return {start:new Date(2010, 7, 17), content: log.username}
      });
      this.setState({items});
    })
    ])
    
  }

  async fetchOnClick(buildingId){
    axios.get(`http://localhost:4100/buildings/${buildingId}/logs`).then(apiResponse=>{
      const logs = apiResponse.data.logs;
      if(logs){
        const items = logs.map(log=>{
          return {start:new Date(2010, 7, 17), content: log.username}
        });
        this.setState({items});
      }
      else{
        this.setState({items: []})
      }
    })
  }

  changeSelectedIndex(index, building){
    this.setState({selected: index});
    this.setState({building: building.name})
    this.fetchOnClick(building._id);
    console.log(index,building);
  }
  scheduler
  render() {
    return (
      <div style={{ marginLeft: "230px", padding: "20px" }}>
        <img style={{float: 'right', width:'25px', height:'30px' }} src={require('../../resources/accountIcon.png')}></img>
        <div>
          <h3 className="header">Dashboard</h3>
          <div className="banner">
            <h2 className="welcome">Welcome Back {this.state.user}</h2>
            <h1 className="status">
              Pending service Requests: {this.state.tickets}
            </h1>
          </div>
        </div>
        <span style={{ display: "flex", flexDirection: "row", width: "95%" }}>
          <div className="building-container">
            <p className="heading">Building</p>
            <div style={{ display: "flex" }}>
              <img
                className="image"
                src={require("../../resources/building-grey-icon.png")}
              ></img>
              <div style={{ marginLeft: "20px" }}>
                <p className="building-name">{this.state.building}</p>
                <hr className="title-line" />
                <p className="building-name sub-text">Tracking</p>
              </div>
            </div>
            <div className="subContainer">
              {this.state.buildingList.map((buildings,index) => {
                return (
                  <div>
                    <ul>
                      <li>
                        <button className="building-button" onClick={(e)=>{this.changeSelectedIndex(index,buildings,e)}}>
                          {(this.state.selected===index)? <span
                            className="active"
                          ></span>: <span
                            className="active"
                            style={{ backgroundColor: "#fff" , marginRight: '5px'}}
                          ></span>}
                          {buildings.name}
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <hr className="footer"></hr>
            <img style={{height:'15px',width:'10px', float: 'right', marginRight: '10px'}} src={require('../../resources/chevron.png')}></img>
          </div>
          <div style={{
        marginLeft:'80px',
        marginTop:'90px',
        height: '500px',
        padding:'20px',
        minHeight: '500px',
        borderRadius: '10px',
        backgroundColor: '#FBFBFB',
        width: '800px'}}>
            <p style={{
              marginTop: '1px',
              fontFamily: 'sans-serif',
              marginLeft: '15px',
              fontSize: '12px',
              letterSpacing: '.15em',
              color: '#5A5555'
            }}>
              Monitoring
            </p>
            <Timeline>
            {this.state.items.map(item => (
            <TimelineEvent title="Granted"
                           createdAt={`${item.start}`}
                           icon={<i className="material-icons md-18">granted</i>}
            >
               {item.content}
            </TimelineEvent>))}
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">granted</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
    </Timeline>
            </div>
        </span>

        <span className="archiveCard">
          <div className="archiveContainer">
            <p
              style={{
                marginTop: "1px",
                fontFamily: "sans-serif",
                marginLeft: "15px",
                fontSize: "12px",
                letterSpacing: ".15em",
                color: "#5A5555"
              }}
            >
              Account
            </p>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <img
                style={{
                  maxHeight: "60px",
                  width: "60px",
                  paddingLeft: "20px"
                }}
                src={require("../../resources/file.png")}
              ></img>
              <div style={{ marginLeft: "20px" }}>
                <p
                  style={{
                    verticalAlign: "middle",
                    fontFamily: "Nunito",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    letterSpacing: ".15em",
                    color: "#508bff"
                  }}
                >
                  View Archive
                </p>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
