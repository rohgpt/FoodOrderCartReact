import React, { Component } from "react";
import Counter from "./Counters";
class CounterList extends Component {
  state = {
    inputVar: "",
    totalQty: 0,
    totalCost: 0,
    CounterLists: [
      { id: 1, Rating: 5.5, Cost: 85, qty: 0, name: "pizza" },
      { id: 2, Rating: 8, Cost: 95, qty: 0, name: "Burger" },
      { id: 3, Rating: 9, Cost: 35, qty: 0, name: "Lachha Paratha" },
      { id: 4, Rating: 2, Cost: 120, qty: 0, name: "Palak Paneer" },
    ],
  };
  handleDelete = (e, q) => {
    const arr = this.state.CounterLists.filter((i) => i.id !== e);

    this.setState({ CounterLists: arr, totalQty: this.state.totalQty - q });
  };
  handleAdd = (e) => {
    const arr = [
      ...this.state.CounterLists,
      {
        name: this.state.inputVar,
        id: this.state.CounterLists.length + 1,
        Rating: 8,
        Cost: 12,
        qty: 0,
      },
    ];
    this.setState({ inputVar: "", CounterLists: arr });
  };
  handleChange = (event) => this.setState({ inputVar: event.target.value });
  handleIncrementQty = (e) => {
    this.setState({
      totalQty: e > 0 ? this.state.totalQty - 1 : this.state.totalQty + 1,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputVar}
          placeholder="Enter Item name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={this.state.inputVar}
          placeholder="Rate"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={this.state.inputVar}
          placeholder="Cost"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={this.state.inputVar}
          placeholder="Quantity"
          onChange={this.handleChange}
        />
        <button
          className="badge badge-info"
          style={{ fontSize: 20 }}
          onClick={this.handleAdd}
        >
          AddNew
        </button>
        <caption
          className="badge badge-info m-2 border-maroon text-xl"
          style={{ display: "block", textAlign: "center" }}
        >
          Showing {this.state.CounterLists.length} items added in cart :-
        </caption>
        <table className="table table-responsive-sm table-hover table-striped table-dark">
          <thead>
            <tr>
              <th>Items Name</th>
              <th>Items Rate</th>
              <th>Items Price</th>
              <th>Items Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.CounterLists.map((items) => {
              return (
                <Counter
                  key={items.id}
                  value={items.qty}
                  cost={items.Cost}
                  name={items.name}
                  rating={items.Rating}
                  handleDelete={this.handleDelete}
                  id={items.id}
                  inc={this.handleIncrementQty}
                />
              );
            })}
            <tr>
              <td>
                <button
                  className="badge badge-success"
                  style={{ fontSize: 20 }}
                >
                  SortByRating
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="badge badge-success"
                  style={{ fontSize: 20 }}
                >
                  SearchItems
                </button>
              </td>
              <td>TotalCost:{this.state.totalCost}</td>
              <td>TotalQty:{this.state.totalQty}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CounterList;
