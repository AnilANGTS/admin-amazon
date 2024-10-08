import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PricingTableCard3 extends React.Component {
  render() {
    const { head, price, img } = this.props;
    return (
      <div className="col-lg-4 col-md-12">
        <div className="card pricing3">
          <div className="body">
            <div className="pricing-option">
              <i className={img}></i>
              <h5>{head}</h5>
              <hr />
              <div className="m-t-30 m-b-30">
                <h6>Files</h6>
                <p>
                  .PSD .AI .PNG .SVG
                  <br />
                  Licensed for 1 project
                </p>
              </div>
              <div className="price">
                <span className="price">
                  {price} <b>$</b>
                </span>
              </div>
              <Link to="#" className="btn btn-outline-secondary">Purchase now</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(PricingTableCard3);
