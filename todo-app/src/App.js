import React, { Component } from 'react';
import Header from './component/header';
import ActionBTN from './component/actionBTN';
import Table from './component/Table';
class  App  extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div className="container">
        {/* navbar */}
            <div>  
              <Header />
            </div>
        {/* navbar */}
        {/* action BTN */}
            <div className="mt-4">
                <ActionBTN />
            </div>
        {/* action BTN */}
        {/* table */}
            <div className="mt-5">
              <Table />
            </div>
         {/* table */}
        </div>
      </div>
     );
  }
}
 
export default App ;
