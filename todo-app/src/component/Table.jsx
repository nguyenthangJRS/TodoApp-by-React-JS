import React, { Component } from 'react';
import SubTable from './subTable';
import '../component-css/table.css';
class Table extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="row mt-5">
                 {/* subTable */}  
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="subTbale">
                            <div className="closeBTN">
                                <span className="mt-3">Insert Data</span>
                                <i className="fa fa-times-circle"></i>
                            </div>
                            <form>
                                <div className="insertData mt-5">
                                    <label className="text-white ml-3">Title</label>
                                    <input type="text" name="title"placeholder="Title" />
                                </div>
                                <div className="insertData">
                                    <label  className="text-white ml-3">Post</label>
                                    <textarea type="text" name="title"placeholder="Your Post Content" className="ml-2"></textarea>
                                </div>
                                <div className="status-div ml-3">
                                    <select name="status"className="mt-3">
                                        <option value={true}>Activated</option>
                                        <option value={false}>Hidden</option>
                                    </select>
                                </div>
                                <div className="submitBtn">
                                        <button type="submit" className="btn btn-primary mt-3 mr-3 float-right">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                 {/* Main Table */}
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <table className="table">
                            <thead className="thead-dark">
                             
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Post</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               <SubTable />
                            </tbody>

                        </table>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Table;