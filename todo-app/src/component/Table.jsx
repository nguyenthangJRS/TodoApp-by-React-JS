import React, { Component } from 'react';
import SubTable from './subTable';
import '../component-css/table.css';
class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            title: "",
            post: "",
            status: false
        }
    }
    


    // componentDidUpdate(){
    //   if(this.props.statusSubTable){
    //     this.setState({
    //         id : this.props.dataEdit.id,
    //         title : this.props.dataEdit.title,
    //         post : this.props.dataEdit.post,
    //         status : this.props.dataEdit.status
    // })
    //   }
    // }
    
    onEdit = ()=>{
        this.setState({
                    id : this.props.dataEdit.id,
                    title : this.props.dataEdit.title,
                    post : this.props.dataEdit.post,
                    status : this.props.dataEdit.status
            })
    }

    onChangeData = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false
        }
        this.setState ({
            [name] :value
        })
    }
    close = ()=>{
        this.props.closeSubTable();
    }
    onDataSubmit = (event)=>{
        event.preventDefault();
        this.props.onDataSubmit(this.state);
        this.close();
    }
    onClear =()=>{
        this.setState({
            title: "",
            post: "",
            status: false
        })
    }
    render() { 
        const { dataTable,changeIconAction,statusSubTable,closeSubTable,onDelete,onEdit,dataEdit } = this.props;
        return ( 
            <div>
                <div className="row mt-5">
                 {/* subTable */}  
                    <div className={statusSubTable === true ? "col-4 col-sm-4 col-md-4 col-lg-4" : "hiddenTable"}>
                        <div className="subTbale">
                            <div className="closeBTN">
                                <span className="mt-3">{this.state.id !=='' ? "Edit Data" : "Insert Data"}</span>
                                <i className="fa fa-times-circle"onClick = {closeSubTable}></i>
                            </div>
                            <form onSubmit={this.onDataSubmit}>
                                <div className="insertData mt-5">
                                    <label className="text-white ml-3">Title</label>
                                    <input  type="text"
                                            name="title" placeholder="Title" 
                                            value = {this.state.title} 
                                            onChange = {this.onChangeData}
                                             />
                                </div>
                                <div className="insertData">
                                    <label  className="text-white ml-3">Post</label>
                                    <textarea type="text"
                                              name="post"placeholder="Your Post Content"
                                              className="ml-2"
                                              value = {this.state.post} 
                                              onChange = {this.onChangeData}
                                              ></textarea>
                                </div>
                                <div className="status-div ml-3">
                                    <select name="status"className="mt-3"
                                            value = {this.state.status} 
                                            onChange = {this.onChangeData}
                                            >
                                        <option value={false}>Activated</option>
                                        <option value={true}>Hidden</option>
                                    </select>
                                </div>
                                <div className="submitBtn">
                                        <button type="reset"className="btn btn-danger mt-3 mr-3 float-right btn-size"onClick={this.onClear}>Reset</button>
                                        <button type={statusSubTable === false ? "reset" : "submit"} className="btn btn-primary mt-3 mr-3 float-right btn-size">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                 {/* Main Table */}
                    <div className={ statusSubTable === true ? "col-8 col-sm-8 col-md-8 col-lg-8" : "col-12 col-sm-12 col-md-12 col-lg-12"}>
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
                                { dataTable.map((data,index) =><SubTable 
                                                        key = {data.id}
                                                        index = {index}
                                                        dataTable = {data}
                                                        changeIconAction = {changeIconAction}
                                                        onDelete = {onDelete}
                                                        onEdit = {onEdit}
                                                        statusSubTable = {statusSubTable}
                                                        dataEdit = {dataEdit}
                               />)}
                               
                            </tbody>

                        </table>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Table;