import React, { Component } from "react";

export default class Monitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: ["Dwight Oliver Holmes Hall", "Towers Hall", "Kennard Hall"]
    };
  }
  //TODO:: Build a custom dropdown that listens to state change and correctly updates list..
  render() {
    return (
      <div style={{ marginLeft: "260px", marginTop: "50px" }}>
        <span style={{ float: "right", marginRight: "30px" }}>
          <form>
            <select
              style={{ border: ".5px solid #838383", borderRadius: "40px" }}
            >
              {this.state.buildings.map(building => (
                <option value={building}>{building}</option>
              ))}
              <option></option>
            </select>
          </form>
        </span>
        <div
          style={{
            margin: "20px",
            minHeight: "70%",
            minWidth: "77%",
            border: "1px solid #BFBFBF",
            position: "absolute",
            top: "20"
          }}
        ></div>
        <span style={{ display: "flex", flexDirection: "row", width: "90%", position: 'absolute', bottom: '70px', marginLeft: '20px' }}>
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
            ></p>
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
