import React, { Component } from 'react';
import '../component-css/actionBTN.css';
class ActionBTN extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter : true,
            search : ''
        }
    }

    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if(name === "filter"){
          value = target.value === "true" ? true : false
        }
        this.setState({
            [name] : value
        },()=>{
           
            this.props.sortDT(this.state.filter)

        })
      
    }
    onSubmitX = (e)=>{
            e.preventDefault();
            this.props.dataSearch(this.state.search);
    }

    render() { 
        const {onInsertData,onSubmit,openInsertData } = this.props;
        return ( 
            <div>
                    <div className="row">
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 offset-2 offset-sm-2 offset-md-2 offset-lg-2 addPost my-5">
                                        <button className="btn-warning btn-md mr-2"onClick={onInsertData}>Fate Data</button>
                                        <button className="btn-danger btn-md"onClick={openInsertData}>Add Post</button>
                                </div>
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 filter">
                                <div >
                                    <select name="filter"
                                            value = {this.state.filter}
                                            onChange = {this.onChange}
                                            >
                                        <option value={true}>Up</option>
                                        <option value={false}>Down</option>
                                    </select>
                                </div>
                             <form className="form"action="" method=""onSubmit={this.onSubmitX}>
                                <div >
                                    <input type="search"
                                           name="search"
                                           id=""placeholder="Search Item" 
                                           value = {this.state.search}
                                           onChange = {this.onChange}
                                           />
                                    <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                             </form>

                         </div>
                    </div>
            </div>
         );
    }
}
 
export default ActionBTN;