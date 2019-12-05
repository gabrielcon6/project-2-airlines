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
            children.push(<td>{`Column ${j + 1}`}</td>)
        }
        //Create the parent and add the children
        table.push(<tr>{children}</tr>)
        }
        return table
    }

  render() {
    return(
        <div>
            <table>
                {this.createTable()}
            </table>
      </div>
    )
  }

}