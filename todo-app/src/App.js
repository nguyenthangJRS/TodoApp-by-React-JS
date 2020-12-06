import React, { Component } from 'react';
import Header from './component/header';
import ActionBTN from './component/actionBTN';
import Table from './component/Table';
class  App  extends Component {
  constructor(props){
    super(props);
    this.state = { 
        tableData : [],
        status: false,
        dataEdit : null,
        search : '',
        sortDT : true
     }

  }
   // fate data
   handleInsertData = ()=>{
     var fateData = [
       {id: this.generateId(),
        title:'React',
        post:'Bootstrap in React Js ',
        status:false

      },
       {id: this.generateId(),
        title:'Bootstrap',
        post:'Bootstrap 5 Review ',
        status:false

      },
       {id:this.generateId(),
        title:'Node Js',
        post:'Login form with Node Js ',
        status:true

      },
       {id: this.generateId(),
        title:'Vue',
        post:'Vue Js ',
        status:true

      }
     ];
     this.setState({
      tableData : fateData
     });
     localStorage.setItem('data',JSON.stringify(fateData));
   }
   componentWillMount(){
     if( localStorage && localStorage.getItem('data')){
       var fateData = JSON.parse(localStorage.getItem('data'));
       this.setState({
         tableData : fateData
       })
     }
    //  if(localStorage && localStorage.getItem('keyword')){
    //    var editData = JSON.parse(localStorage.getItem('keyword'));
    //    this.setState({
    //     dataEdit : editData
    //    })
    //  }
    //  console.log(this.state.dataEdit)
   }
   onSubmit = (event)=>{
      event.preventDefault();

   }
  
  
   randomId(){
     return Math.floor((1+Math.random())* 0x10000).toString(16).substring(1);
   }
   generateId(){
     return this.randomId() + this.randomId() + '-' + this.randomId() + '-'+ this.randomId() + '-'+ this.randomId() + '-'+ this.randomId() + '-'+ this.randomId() + '-'+ this.randomId() + '-'+ this.randomId();
   }
   //function Area
      changeIconAction = (row)=>{
        var newTable = [...this.state.tableData];
        var index = newTable.indexOf(row);
        newTable[index] = {...row};
        newTable[index].status === true ? (newTable[index].status = false) : (newTable[index].status = true);
        this.setState ({
          tableData : newTable
        })
       
      }
// update status subtable
      openInsertData = ()=>{
        this.setState ({
          status : !this.state.status
        })
      }
      closeSubTable = ()=>{
        this.setState ({
          status : this.state.status === true ? false : ""
        })
      }
//  change Data function
  onDataSubmit = (data)=>{
    const { tableData } = this.state;
    data.id = this.generateId();
  
    tableData.push(data);
    this.setState({
      tableData : tableData
    })
    localStorage.setItem('data',JSON.stringify(tableData)); 
  }
  //on Delete
  onDelete = (e)=>{
    var deleteArr = this.state.tableData.filter(c=> c.id !== e);
    this.setState({
        tableData : deleteArr
    })
    localStorage.setItem('data',JSON.stringify(deleteArr));
  }
  //Edit data
  onEdit = (IdEdit)=>{
    var newArr = this.state.tableData.find(row => row.id === IdEdit);
    this.setState({
      status : true
    })
      this.setState({
        dataEdit : newArr
      })
      console.log(this.state.dataEdit);
      
  }

// search
dataSearch = (search)=>{

  this.setState ({
    search : search.toLowerCase()
  },()=>{
    console.log(this.state.search)
  })
 
}
//sort data
sortDT = (filter)=>{
  this.setState ({
    sortDT : filter
  },() =>{
    console.log(this.state.sortDT)
  } )
  console.log(filter);
}

  render() { 
    var { search,tableData,sortDT } = this.state;
    if(search === ''){
    }
    else{
      tableData = tableData.filter(row => {return row.post.toLowerCase().indexOf(search) !== -1});
    }
    if(sortDT === true){
      tableData = tableData.sort((a,b) => {
       if(a.title > b.title) return 1;
       else if( a.title <b.title) return -1;
       else return 0
      })
    }else{
      tableData = tableData.sort((a,b) => {
        if(a.title > b.title) return -1;
        else if( a.title <b.title) return 1;
        else return 0
       })
    }
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
                <ActionBTN 
                  sortDT = {this.sortDT}
                  dataSearch = {this.dataSearch}
                  openInsertData = {this.openInsertData}
                  onInsertData = {this.handleInsertData}
                  onSubmit = {this.onSubmit}
                />
            </div>
        {/* action BTN */}
        {/* table */}
            <div className="mt-5">
              <Table 
                onDataSubmit = {this.onDataSubmit}
                changeIconAction = {this.changeIconAction}
                closeSubTable = {this.closeSubTable}
                statusSubTable = {this.state.status}
                dataTable = {tableData}
                dataEdit = {this.state.dataEdit}
                onDelete = {this.onDelete}
                onEdit = {this.onEdit}
              />
            </div>
         {/* table */}
        </div>
      </div>
     );
  }
}
 
export default App ;
