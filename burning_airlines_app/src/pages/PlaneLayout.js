import React from "react";
import "../styles/flightID.css";
import { Link } from "react-router-dom";

function PlaneLayout() {
  return (
    <div className="plane-layout">
      <div className="airplane">
        <h1>Please Select Your Seats</h1>
        <div className="plane-container">
          <div className="top-rows">
            <div className="row">
              <button className="seat-button">A10</button>
              <button className="seat-button">A9</button>
              <button className="seat-button">A8</button>
              <button className="seat-button">A7</button>
              <button className="seat-button">A6</button>
              <button className="seat-button">A5</button>
              <button className="seat-button">A4</button>
              <button className="seat-button">A3</button>
              <button className="seat-button">A2</button>
              <button className="seat-button">A1</button>
            </div>
            <div className="row">
              <button className="seat-button">B10</button>
              <button className="seat-button">B9</button>
              <button className="seat-button">B8</button>
              <button className="seat-button">B7</button>
              <button className="seat-button">B6</button>
              <button className="seat-button">B5</button>
              <button className="seat-button">B4</button>
              <button className="seat-button">B3</button>
              <button className="seat-button">B2</button>
              <button className="seat-button">B1</button>
            </div>
          </div>
          <div className="bottom-rows">
            <div className="row">
              <button className="seat-button">C10</button>
              <button className="seat-button">C9</button>
              <button className="seat-button">C8</button>
              <button className="seat-button">C7</button>
              <button className="seat-button">C6</button>
              <button className="seat-button">C5</button>
              <button className="seat-button">C4</button>
              <button className="seat-button">C3</button>
              <button className="seat-button">C2</button>
              <button className="seat-button">C1</button>
            </div>
            <div className="row">
              <button className="seat-button">D10</button>
              <button className="seat-button">D9</button>
              <button className="seat-button">D8</button>
              <button className="seat-button">D7</button>
              <button className="seat-button">D6</button>
              <button className="seat-button">D5</button>
              <button className="seat-button">D4</button>
              <button className="seat-button">D3</button>
              <button className="seat-button">D2</button>
              <button className="seat-button">D1</button>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="seat-button1">Unavaible</button>
          <button className="seat-button2">Available</button>
        </div>
      </div>
    </div>
  );
}

export default PlaneLayout;
