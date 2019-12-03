const client = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
//import {ObjectId} from 'mongodb';
const request = require("request-promise");

//db.collection("users").insert("");

const users = [
  {
    name: "David Nsoesie",
    email: "dnsoesie@david.com",
    role: "Student",
    username: "dnsoes1",
    password: "test",
    accessRights: null,
    status: "In the library",
    policies: {
      morning: "don't care",
      afternoon: "don't care",
      evening: "I won't be there so.."
    },
    guests: [{ name: "Cynthia Marks", end: "1571884051304" }]
  },
  {
    name: "Michale Jackson",
    email: "michael@david.com",
    role: "Student",
    username: "mjack1",
    password: "test",
    accessRights: null,
    status: "In the library",
    policies: {
      morning: "don't care",
      afternoon: "don't care",
      evening: "I won't be there so.."
    },
    guests: [{ name: "David Blain", end: "1571884051304" }]
  },
  {
    name: "Sandra Jackson",
    email: "michael@david.com",
    role: "Student",
    username: "sJackie",
    password: "test",
    accessRights: null,
    status: "In the library",
    policies: {
      morning: "don't care",
      afternoon: "don't care",
      evening: "I won't be there so.."
    },
    guests: [{ name: "David Blain", end: "1571884051304" }]
  }
];

function generateAccessLogs() {
  console.log("generating");
  let db;
  client
    .connect(
      "mongodb+srv://lockboxAdmin:random@lockbox-gxojw.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(client => {
      request("https://randomuser.me/api/").then(apiResponse => {
        const user = JSON.parse(apiResponse).results;
        const accessLog = {
          buildingId: new ObjectId("5d881a5b1c9d440000c7dd11"),
          username: user[0].name.first,
          date: randomDate(new Date(2019, 5, 1), new Date(2019,12,1)).getTime()
        };
        client.db('safe').collection('access-logs').insert(accessLog);
      });
    });

  console.log("in while");
}
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

setInterval(() => {
  generateAccessLogs();
}, 2000);


function deleteAll(){
    client
    .connect(
      "mongodb+srv://lockboxAdmin:random@lockbox-gxojw.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(client=>{
        client.db('safe').collection('access-logs').deleteMany({})
    })
}

//deleteAll();