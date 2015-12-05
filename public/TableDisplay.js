import React from 'react';

// import TableHeader from './TableHeader';
// import TableBody from './TableBody';



export default class extends React.Component {
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Example TH1</th>
            <th>Example TH2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>example row1 td1</td>
            <td>example row1 td2</td>
          </tr>
          <tr>
            <td>example row2 td1</td>
            <td>example row2 td2</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
