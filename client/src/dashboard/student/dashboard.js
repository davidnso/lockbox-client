import React, { Component } from "react";
import "./dashboard.css";
export default class StudentDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "David",
      status: "In the Lab",
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
        <div
          style={{
            right: "10px",
            height: "95%",
            width: "300px",
            backgroundColor: "#FCFCFC",
            position: "fixed",
            borderRadius: "15px",
            padding: "15px",
            alignContent: "center",
            verticalAlign: "middle"
          }}
        >
         <p style={{fontWeight: 500, fontSize: '17px',color: '#5A5555'}}>Logout</p>
          <div
              style={{
                width: "100%",
                height: "50%",
                alignItems: "center",
                textAlign: "center",
                position: "absolute",
                transform: "translate(0%,50%)"
              }}
            >
              <img
                src={require("../../resources/user.png")}
                style={{ width: "200px", height: "200px", alignSelf: "center", marginBottom: '20px' }}
              ></img>
              <h2
                style={{
                  fontFamily: "Nunito",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  letterSpacing: ".15em",
                  color: "#fff",
                  backgroundColor: '#58BE56',
                  lineHeight: '25px',
                  width: '150px',
                  margin: 'auto',
                  borderRadius: '20px'
                }}
              >
Student              </h2>
              <p
                style={{
                  lineHeight: "10px",
                  fontFamily: "Nunito",
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "14px",
                  color: "#000"
                }}
              >
                David Nsoesie
              </p>
              <p style={{lineHeight: "10px",
                  fontFamily: "Nunito",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "14px",
                  color: "#000"}}>dnsoes1</p>
              
            </div>
            <div style={{position: 'absolute', bottom: '60px'}}>
            <ul>
              <li className="studentAccountTitle">
                Your Account
                <ul>
                  <li className="studentAccountItem" style={{marginTop: '25px'}}>Edit</li>
                  <li className="studentAccountItem">Notifications</li>
                </ul>
                Settings
              </li>
            </ul>
            </div>
        </div>
        <div>
          <h3 className="header">Dashboard</h3>
          <div className="banner">
            <h2 className="welcome">Welcome Back {this.state.user}</h2>
            <h1 className="status">Your status: {this.state.status}</h1>
          </div>
        </div>
        <span style={{ display: "flex", flexDirection: "row", width: "95%" }}>
          <div className="roommate-container">
            <p
              style={{
                fontFamily: "Nunito",
                fontSize: "15px",
                fontWeight: "bold",
                margin: "15px"
              }}
            >
              Roommates
            </p>
            <div>
              <ul>
                <li>
                  <div
                    style={{
                      width: "50%"
                    }}
                  >
                    <img
                      style={{ width: "55px", height: "55px" }}
                      src={require("../../resources/profile.png")}
                    />
                    <div
                      style={{
                        flexDirection: "column",
                        float: "right ",
                        verticalAlign: "middle",
                        marginTop: "5px"
                      }}
                    >
                      <label
                        style={{
                          fontFamily: "Nunito",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 300,
                          letterSpacing: ".15em",
                          color: "#B1B1B1"
                        }}
                      >
                        Rince prince
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "Nunito",
                          fontStyle: "normal",
                          fontWeight: "300",
                          fontSize: "15px",
                          color: "#000"
                        }}
                      >
                        rprince
                      </label>
                    </div>
                  </div>
                  <div style={{ paddingTop: "10px", paddingLeft: "12px" }}>
                    {" "}
                    <label
                      style={{
                        fontWeight: "700",
                        fontFamily: "Nunito",
                        letterSpacing: ".15em",
                        fontSize: "14px"
                      }}
                    >
                      Status:{" "}
                    </label>
                    <label
                      style={{
                        fontFamily: "Nunito",
                        letterSpacing: ".15em",
                        fontSize: "14px"
                      }}
                    >
                      In class
                    </label>
                    <br />{" "}
                    <label
                      style={{
                        fontFamily: "Nunito",
                        letterSpacing: ".15em",
                        fontSize: "14px"
                      }}
                    >
                      Guest Policy:
                    </label>{" "}
                    <label
                      style={{
                        fontFamily: "Nunito",
                        letterSpacing: ".15em",
                        fontSize: "14px",
                        fontWeight: "300"
                      }}
                    >
                      Keep it down!
                    </label>
                  </div>

                  <hr
                    style={{
                      width: "80%",
                      float: "left",
                      height: "0px",
                      marginTop: "20px",
                      border: "1px solid #ECECEC"
                    }}
                  ></hr>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginLeft: "80px",
              marginTop: "90px",
              padding: "5px",
              minHeight: "100px",
              borderRadius: "10px",
              width: "400px"
            }}
          >
            <div
              style={{
                backgroundColor: "#EDF8FF",
                borderRadius: "10px",
                width: "95%",
                padding: "5px",
                height: "95px",
                marginBottom: "10px"
              }}
            >
              <p
                style={{
                  marginTop: "1px",
                  fontFamily: "sans-serif",
                  marginLeft: "15px",
                  fontSize: "12px",
                  letterSpacing: ".15em"
                }}
              >
                Guest
              </p>
              <div
                style={{
                  width: "60%"
                }}
              >
                <img
                  style={{ width: "55px", height: "55px", marginLeft: "15px" }}
                  src={require("../../resources/profile.png")}
                />
                <div
                  style={{
                    flexDirection: "column",
                    float: "right ",
                    verticalAlign: "middle",
                    marginTop: "5px"
                  }}
                >
                  <label
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      letterSpacing: ".15em",
                      color: "#B1B1B1"
                    }}
                  >
                    Rince prince
                  </label>
                  <br />
                  <label
                    style={{
                      fontFamily: "Nunito",
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#000"
                    }}
                  >
                    rprince
                  </label>
                </div>
              </div>
              <hr
                style={{
                  width: "80%",
                  height: "0px",
                  marginTop: "7px",
                  border: "1px solid #fff"
                }}
              />
            </div>
            <h1></h1>
          </div>
        </span>
      </div>
    );
  }
}
/**ROOOOMMMMAAATEE LI!!!!!!!!!
 * <li style={{ display: "flex", flexDirection: "row" }}>
                        <img
                          style={{
                            width: "50px",
                            height: "50px",
                            marginLeft: "25px",
                            verticalAlign: "middle",
                            transform: "translate(10%,50%)"
                          }}
                          src={require("../../resources/profile.png")}
                        ></img>
                        <div
                          style={{
                            verticalAlign: "middle",
                            transform: "translate(10%,60%)",
                            flexDirection: "column",
                            marginLeft: "10px"
                          }}
                        >
                          <label
                            style={{
                              fontFamily: "Nunito",
                              fontSize: "18px",
                              fontStyle: "normal",
                              fontWeight: 300,
                              letterSpacing: ".15em",
                              color: "#B1B1B1"
                            }}
                          >
                            djdansdf{" "}
                          </label>
                          <br />
                          <label
                            style={{
                              fontFamily: "Nunito",
                              fontStyle: "normal",
                              fontWeight: "300",
                              fontSize: "11px",
                              color: "#000"
                            }}
                          >
                            jsdnfkjdns{" "}
                          </label>
                        </div>
                        
                      </li>
 */
