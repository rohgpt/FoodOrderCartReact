import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class counter extends Component {
  state = {
    arrItems: [
      { id: 0, name: "Cake", count: 1 },
      { id: 1, name: "Biscuit", count: 5 },
      { id: 2, name: "Chocolate", count: 5 },
      { id: 3, name: "IceCream", count: 5 },
    ],
  };
  format = (e) => {
    const { count } = e;
    return count === 0 ? "zero" : count;
  };
  handleIncrement = (e) => {
    const arr = this.state.arrItems.filter((i) => {
      //console.log(i);
      if (i.id === e.id) {
        i.count += 0.5;
      }

      return true;
    });

    this.setState({ arrItems: arr });
  };
  handleDelete = (e) => {
    const arr = this.state.arrItems.filter((i) => i.id !== e.id);

    this.setState({ arrItems: arr });
  };
  render() {
    let count = 0;
    var padding = Array(15).join(" "); // make a string of 255 spaces

    return (
      <React.Fragment>
        {this.state.arrItems.length !== 0 ? (
          <p className="badge badge-info">
            No Of Items:{this.state.arrItems.length}
          </p>
        ) : (
          <p className="badge badge-info">No items Added</p>
        )}
        <ul style={{ textDecoration: null }}>
          {this.state.arrItems.map((i) => {
            count += i.count;
            return (
              <li>
                {(padding = Array(10 - i.name.length).join("."))}
                <p className="badge badge-danger m-2">
                  {padding + i.name + padding}
                </p>
                <button
                  style={{ boxShadow: "0px 0px 5px 5px green" }}
                  className="button btn-outline-info"
                  onClick={() => {
                    this.setState(() => this.handleIncrement(i));
                  }}
                >
                  Increment
                </button>
                <span
                  style={{ fontSize: 20, fontWeight: "bold" }}
                  className={this.changeClass(i)}
                >
                  {this.format(i)}
                </span>

                <button
                  style={{ boxShadow: "0px 0px 5px 5px green" }}
                  className="button btn-outline-info"
                  onClick={() => this.handleDelete(i)}
                >
                  Decrement
                </button>
              </li>
            );
          })}
          <p className="badge badge-light">Total : {count} </p>
        </ul>
      </React.Fragment>
    );
  }

  changeClass(e) {
    let classes = "badge m-4 badge-";
    classes += e.count === 0 ? "primary" : "warning";
    return classes;
  }
}

export default counter;
