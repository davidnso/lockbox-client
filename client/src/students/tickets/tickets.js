import React, { Component } from "react";
import './tickets.css'
import axios from "axios";
export default class Tickets extends Component {
  state={
    formStarted: true,
    formDetails: {},
  };
  handleSubmit(event){
    const userId = "5d90dc8f1c9d4400002fc3ce";
    const info = this.state.formDetails;
    
    axios.post(`http://localhost:4100/service/${userId}`,{info}).then(apiResponse=>{
      console.log('request made')
      if(apiResponse.statusText!= 404){
        console.log('success');
      }
    });
  }

  

  handleBuildingChange(event,state) {
    const target = event.target;
    const value = target.value
    const info = state;
    info.buildingId= value;
    this.setState({
      formDetails: info
    });
  }
  handleBeginChange(event,state) {
    const target = event.target;
    const value =  target.value;
    const info = state;
    info.begin= value;
    this.setState({
      formDetails: info
    });
  }
  handleEndChange(event,state) {
    const target = event.target;
    const value = target.value ? target.value : '12/12/12';
    const info = state;
    info.end= value;
    this.setState({
      formDetails: info
    });
  }
  handleDetailsChange(event,state) {
    const target = event.target;
    const value = target.value;
    const details = value;
    const info = state;
    info.details= details;
    console.log(info.details);
    this.setState({
      formDetails: info
    });
  }
  render() {
    return (
      // <div style={{ marginLeft: "230px", padding: "20px" }}>
      //   <div>
      //     <div style={{cursor: 'pointer'}}>
      //     <img style={{marginLeft: '15px', marginTop: '10px', width: '23px', height: '20px'}} src={require('../../resources/plusIconAdd.png')}></img><label style={{cursor:'pointer'}}> Create New</label>
      //     </div>
         
      //     <h3 className="header">Tickets</h3>
      //     <div style={{width: '90%', backgroundColor: '#FBFBFB', marginLeft: '15px', borderRadius: '8px', padding: '20px'}}>
      //       <p className="ticketDetails">SR#: 432423423</p>
      //       <p className="ticketDetails">Details: sjjfodajfkoadjfodjjdoj</p>
      //       <p className="ticketDetails">Duration: sd hours</p>
      //       <img style={{height: '15px', width: '10px', float:'right'}} src={require('../../resources/chevron.png')}/>
      //     </div>
      //   </div>
      // </div>
      <div>
        {this.createPage()}
      </div>
      
    );
  }

  createPage=props=>{
    return (<div style={{ marginLeft: "230px", padding: "20px" }}>
      <form>
      <select>
        <label>Building</label><option value="Dwight oliver holmes" onChange={(event)=>this.handleBuildingChange(event,this.state.formDetails)}>Dwight oliver Holmes</option>
      </select>
      <br/>
      <label>Less than 24 hours: </label><input type="checkbox"></input>
      <br/>
      <label>From</label>
      <input type='Date' onChange={(event)=>this.handleBeginChange(event,this.state.formDetails)}></input>
      <br/>
      <label>To</label><input type="Date" onChange={(event)=>this.handleEndChange(event,this.state.formDetails)}></input>
      <br/>
      <label>Details</label><input type="textarea" onChange={(event)=>(this.handleDetailsChange(event,this.state.formDetails))}></input>
      <button type="submit" value="submit" onClick={(event)=>(this.handleSubmit(event))}>Submit</button>
      </form>
      <div>
        {this.state.formDetails.details? this.state.formDetails.details: 'HELLLOOOOO'}
      </div>
      
    </div>)
  }
}
