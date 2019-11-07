import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 6,
  },
}));

function createData(id, name, building, date,time, status) {
  if(!status){
    status='granted';
  }
  return { id, name, building, date,time, status };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default class Archive extends Component {
   classes = useStyles;
  state={
    tableData: []
  }
componentWillMount(){
  this.fetchOnLoad().then(()=>{})
}

async fetchOnLoad(){
  let logRow = [];
  Axios.get(`http://localhost:4100/logs`).then( apiResponse=>{
    const logs = apiResponse.data;
    
    logs.map(async log=>{
    const apiResponse = await Axios.get(`http://localhost:4100/buildings/${log.buildingId}`)
    delete log.buildingId;
    log.buildingName = apiResponse.data[0].name;
    const status = 'Accepted';
    const date = new Date(Number.parseInt(log.date));
    const time = date.toLocaleTimeString();
    const day = date.getDate();
      logRow.push(createData(log._id,log.username,log.buildingName,day, time,status));
    })
    console.log(logRow)
  })
  this.setState({tableData: logRow});
}

  render() {
    return (
    <div style={{marginLeft: '240px', marginTop: '20px', marginRight: '20px'}}>
      <div style={{margin: '40px'}}>
      <div style={{ display: "flex" }}>
              <img
                className="image"
                src={require("../../resources/building-grey-icon.png")}
              ></img>
              <div style={{ marginLeft: "10px" }}>
                <p className="building-name">Dwight Oliver Holmes</p>
                <hr className="title-line" />
                <p className="building-name sub-text">Tracking</p>
              </div>
            </div>
      </div>
    <Paper className={this.classes.root}>
    <Table className={this.classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Building&nbsp;</TableCell>
          <TableCell align="right">Carbs&nbsp;</TableCell>
          <TableCell align="right">Date&nbsp;</TableCell>
          <TableCell align="right">Time&nbsp;</TableCell>
          <TableCell align="right">Status&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {this.state.tableData? this.state.tableData.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.buildingName}</TableCell>
            <TableCell align="right">{row.day}</TableCell>
            <TableCell align="right">{row.time}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
          </TableRow>
        )): null}
      </TableBody>
    </Table>
  </Paper>
    </div>);
  }
}
