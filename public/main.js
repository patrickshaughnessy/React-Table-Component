import React from 'react';
import ReactDOM from 'react-dom';

import TableDisplay from './TableDisplay';

let data2 = [
   {"rank":1,"name":"China","population":1373420000,"percent":18.9},
   {"rank":2,"name":"India","population":1280670000,"percent":17.6},
   {"rank":3,"name":"United States","population":322317000,"percent":4.42},
   {"rank":4,"name":"Indonesia","population":255461700,"percent":3.51},
   {"rank":5,"name":"Brazil","population":205252000,"percent":2.82}
];

class App extends React.Component {
  render(){
    return(
      <TableDisplay data={data2} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
