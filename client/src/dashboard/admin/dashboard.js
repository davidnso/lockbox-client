import React, { Component } from "react";
import "./dashboard.css";
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
      ]
    };
  }
  render() {
    return (
      <div style={{ marginLeft: "230px", padding: "20px" }}>
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
              {this.state.buildingList.map(buildings => {
                return (
                  <div>
                    <ul>
                      <li>
                        <button className="building-button">
                          <span
                            className="active"
                            style={{ backgroundColor: "#fff" , marginRight: '5px'}}
                          ></span>
                          {buildings}
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <hr className="footer"></hr>
          </div>
          <div style={{
        marginLeft:'80px',
        marginTop:'90px',
        height: '500px',
        padding:'5px',
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
            <h1></h1>
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
