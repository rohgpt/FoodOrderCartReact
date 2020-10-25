import React, { Component } from "react";
class CounterItems extends Component {
  state = {
    count: this.props.value,
  };
  format = () => {
    if (this.state.count === 0) return "zero";
    return this.state.count;
  };
  increment() {
    this.setState({ count: this.state.count + 1 });
    this.props.inc(0);
  }
  decrement() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
    });
    if (this.state.count > 0) this.props.inc(1);
  }

  render() {
    return (
      <tr>
        <th className="bg-info" scope="row">
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.changeClass(this.state.count)}
          >
            {this.props.name}
          </span>
        </th>
        <td>
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.changeClass(this.state.count)}
          >
            {this.props.rating}
          </span>
        </td>
        <td>
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.changeClass(this.state.count)}
          >
            {this.props.cost + "Rs "}
          </span>
        </td>
        <td>
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.changeClass(this.state.count)}
          >
            {this.format()}
          </span>
        </td>
        <td className="bg-primary">
          <div style={{ marginBottom: 4 }}>
            <button
              className="badge badge-info"
              style={{ fontSize: 20, marginRight: 10 }}
              onClick={this.increment.bind(this)}
            >
              +
            </button>
            <button
              className="badge badge-info"
              style={{ fontSize: 20 }}
              onClick={this.decrement.bind(this)}
            >
              -
            </button>
          </div>
          <button
            className="badge badge-danger"
            style={{ fontSize: 20 }}
            onClick={() =>
              this.props.handleDelete(this.props.id, this.state.count)
            }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  changeClass(e) {
    let classes = "badge m-4 badge-";
    classes += e === 0 ? "dark" : "warning";
    return classes;
  }
}

export default CounterItems;
