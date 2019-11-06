import React, { Component } from "react";
import Axios from "axios";

export default class Tasks extends Component {
  state = {
    tickets: []
  };

  componentDidMount(){
    this.fetchOnLoad();
  }

  fetchOnLoad() {
    let requesters = [];
    Axios.get("http://localhost:4100/service").then(async apiResponse => {
      const ticketArray = apiResponse.data.tickets;
      const fullTickets = await Promise.all(ticketArray.map(async ticket=>{
        if(ticket.requesterId){
        let userApiResponse = await Axios.get(`http://localhost:4100/users/${ticket.requesterId}`);
        const requester = { 
          name: userApiResponse.data[0].name,
          role: userApiResponse.data[0].role,
        }
        ticket.requester = requester;
        //console.log(ticket.requester);
        }
        return ticket;
      })) 
      console.log(fullTickets)
      this.setState({ tickets: fullTickets });
    });
  }
  render() {
    return (
      <div style={{ marginLeft: "230px" }}>
        This is the tasks page
        {this.state.tickets
          ? this.state.tickets.map(ticket => <div>
            <p>{ticket.details}</p>
            <p>{ticket.requester.name}</p>
          </div>)
          : null}
      </div>
    );
  }
}
