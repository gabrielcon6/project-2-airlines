import React from "react";
import "../styles/flightID.css";

class PlaneLayout extends React.Component {
  state = {
    toggle: false,
    selectedSeat: undefined
  };

  onToggle = event => {
    const selectedSeat = event.target.textContent;

    this.setState({
      toggle: !this.state.toggle,
      selectedSeat: selectedSeat
    });
  };
  render() {
    const seatMap1 = [
      ["A10", "A9", "A8", "A7", "A6", "A5", "A4", "A3", "A2", "A1"],
      ["B10", "B9", "B8", "B7", "B6", "B5", "B4", "B3", "B2", "B1"]
    ];

    const seatMap2 = [
      ["C10", "C9", "C8", "C7", "C6", "C5", "C4", "C3", "C2", "C1"],
      ["D10", "D9", "D8", "D7", "D6", "D5", "D4", "D3", "D2", "D1"]
    ];
    const TopSeatMapRows = [];
    const BottomSeatMapRows = [];

    for (const row of seatMap1) {
      TopSeatMapRows.push(
        row.map(topSeats => (
          <button
            onClick={this.onToggle}
            className={
              this.state.selectedSeat === topSeats
                ? "orange-seat"
                : "seat-button"
            }
          >
            {topSeats}
          </button>
        ))
      );
    }
    for (const row of seatMap2) {
      BottomSeatMapRows.push(
        row.map(bottomSeats => (
          <button
            onClick={this.onToggle}
            className={
              this.state.selectedSeat === bottomSeats
                ? "orange-seat"
                : "seat-button"
            }
          >
            {bottomSeats}
          </button>
        ))
      );
    }
    console.log(TopSeatMapRows);
    return (
      <div className="plane-layout">
        <div className="airplane">
          <h1>Please Select Your Seats</h1>
          <div className="plane-container">
            <div className="top-rows">
              {TopSeatMapRows.map(rows => {
                return <div className="row">{rows.map(seat => seat)}</div>;
              })}
            </div>
            <div className="row">
              {BottomSeatMapRows.map(rows => {
                return <div className="row">{rows.map(seat => seat)}</div>;
              })}
            </div>
          </div>
          <div className="row">
            <button className="unavailable">Unavaible</button>
            <button className="available">Available</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaneLayout;
