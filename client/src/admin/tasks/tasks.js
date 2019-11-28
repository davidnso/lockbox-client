import React, { Component } from "react";
import Axios from "axios";
import './tasks.css'
export default class Tasks extends Component {
  state = {
    tickets: [],
    reason: '',
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
      console.log(fullTickets);
      this.setState({ tickets: fullTickets });
    });
  }

  submitTicketResponse(event,value,id){
    const response={
      status: value,
      reason: this.state.response
    }
    Axios.patch(`http://localhost:4100/service/${id}`, response).then(apiResponse=>{
      console.log(apiResponse.status);
    })
    console.log('submitting')

  
  }
  handleResponseChange(event,state){
    this.setState({response: event.value});
  }
  render() {
    return (
      <div style={{ marginLeft: "260px" }}>
        This is the tasks page
        {this.state.tickets
          ? this.state.tickets.map(ticket => <div className='taskCard'>
            <p>Details: {ticket.details}</p>
            {/* <p>{ticket.requester.name}</p> */}
            <label>Reason</label>
            <input type="textarea" onChange={(event)=>this.handleResponseChange(event,this.state.response)}></input>
            <div style={{marginTop: "20px",
                  display: "flex",
                  flexDirection: 'row',
                  width: '70%',
                  marginTop: '120px',
                  margin:'auto',}}>
            <button className="accept" value="accept" type="submit" onClick={(event)=>this.submitTicketResponse(event,event.target.value,ticket._id)}>Accept</button>
            <button className="decline" value="decline" type="submit" onClick={(event)=>this.submitTicketResponse(event,event.target.value,ticket._id)}>Decline</button>
              </div>
            
          </div>)
          : null}
      </div>
    );
  }
}
