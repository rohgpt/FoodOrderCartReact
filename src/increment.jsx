import React, { Component } from "react";

import "./App.css";

// const Inc = (props) => {
//   return (
//     <div>

//         {props.items.count}
//       </p>
//     </div>
//   );
// };

class Inc extends Component {
  state = {
    count: this.props.items.count,
  };
  increment = (e) => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      function () {
        this.props.items(this.state.count);
      }
    );
    // e.preventDefault();
  };
  render() {
    let { items } = this.props;
    return (
      <div>
        <p className="badge badge-danger" style={{ fontSize: 40 }}>
          {this.state.count}
        </p>
        <button
          className="badge badge-danger"
          style={{ fontSize: 40 }}
          onClick={this.increment}
        >
          +++
        </button>
        {console.log(items)}
        <p></p>
      </div>
    );
  }
}
export default Inc;
