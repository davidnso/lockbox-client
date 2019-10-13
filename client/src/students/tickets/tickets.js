import React, { Component } from "react";
import './tickets.css'
export default class Tickets extends Component {
  render() {
    return (
      <div style={{ marginLeft: "230px", padding: "20px" }}>
        <div>
          <h3 className="header">Tickets</h3>
          <div style={{width: '90%', backgroundColor: '#FBFBFB', marginLeft: '15px', borderRadius: '8px', padding: '20px'}}>
            <p className="ticketDetails">SR#: 432423423</p>
            <p className="ticketDetails">Details: sjjfodajfkoadjfodjjdoj</p>
            <p className="ticketDetails">Duration: sd hours</p>
            <img style={{height: '15px', width: '10px', float:'right'}} src={require('../../resources/chevron.png')}/>
          </div>
        </div>
      </div>
    );
  }
}
