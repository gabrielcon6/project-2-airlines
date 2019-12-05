import React from 'react'

export default class ReservationSeats extends React.Component {
    createTable = () => {
        let table = []
        let numOfRows = this.props.rows
        let numOfCols = this.props.cols

        // Outer loop to create parent
        for (let i = 0; i < numOfCols; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < numOfRows; j++) {
            children.push(<td><button className="seat-button">{`${j + 1}`}</button></td>)
        }
        //Create the parent and add the children
        table.push(<tr>{children}</tr>)
        }
        return table
    }

  render() {
    return(
        <div>
            <div className="plane-layout">
                <div className="airplane">
                    <h1>Please Select Your Seats</h1>
                        <div className="plane-container">
                            <div className="top-rows">
                            <div className="row"></div>
                                {/* <table> */}
                                {this.createTable()}
                                {/* </table> */}
                        </div>
                    </div>
                            <button className="available">Available</button>
                            <button className="unavailable">Unavaible</button>
                </div>
            </div>
        </div>
    )
  }

}