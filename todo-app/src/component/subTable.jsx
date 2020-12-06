import React, { Component } from 'react';
import '../component-css/SubTable.css';
class SubTable extends Component {
    render() { 
        const { dataTable,index,changeIconAction,onDelete,onEdit,statusSubTable } = this.props;
      
        return ( 
                <tr className={statusSubTable === true ? "red" : ''}>
                    <th scope="row">{index + 1}</th>
                    <td>{dataTable.title}</td>
                    <td>{dataTable.post}</td>
                    <td onClick={() => {changeIconAction(dataTable)}}><i className = {dataTable.status === true ? `fa fa-flag fa-lg fa-danger` : "fa fa-flag-checkered fa-lg fa-success"}></i></td>
                    <td><i className="fa fa-pencil-square-o fa-lg mr-2 color-btn"onClick={()=>onEdit(dataTable.id)}></i>  
                    <i className="fa fa-trash-o fa-lg ml-2"onClick={()=>{if(window.confirm("Are you sure?")){onDelete(dataTable.id)}}}></i></td>
                </tr>
         );
    }
}
 
export default SubTable;