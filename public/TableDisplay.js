import React from 'react';

// import TableHeader from './TableHeader';
// import TableBody from './TableBody';



export default class extends React.Component {
  render(){

    let tdRows = this.props.data.map(function(row, i){
      // each row is an object
      let tdValues = [];
      for (var key in row){
        let td = <td>{row[key]}</td>
        tdValues.push(td)
      }
      return (
        <tr>{tdValues}</tr>
      )
    })

    let thRow = Object.keys(this.props.data[0]).map(function(elem){
      return (
        <th>{elem}</th>
      )
    });

    return (
      <table>
        <thead>
          <tr>
            {thRow}
          </tr>
        </thead>
        <tbody>
          {tdRows}
        </tbody>
      </table>
    )
  }
}
