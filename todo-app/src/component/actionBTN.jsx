import React, { Component } from 'react';
import '../component-css/actionBTN.css';
class ActionBTN extends Component {
    render() { 
        return ( 
            <div>
              <form action="" method="post">
                    <div className="row">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 offset-4 offset-sm-4 offset-md-4 offset-lg-4 addPost">
                                <button className="btn-danger btn-md">Add Post</button>
                        </div>
                        <div className=" col-2 col-sm-2 col-md-2 col-lg-2">
                            <select name="filter">
                                <option value={true}>Up</option>
                                <option value={false}>Down</option>
                            </select>
                        </div>
                        <div className=" col-4 col-sm-4 col-md-4 col-lg-4 ">
                            <input type="search" name="search" id=""placeholder="Search Item" />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default ActionBTN;