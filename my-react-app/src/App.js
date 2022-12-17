import logo from './logo.svg';
import './App.css'
import User from './user/User'
import React, { Component } from 'react'

// function App() {
//   const users=[
//     {id:1, name:'Somayeh'},
//     {id:2, name:'Tohid'},
//     {id:3, name:'Neda'},
//     {id:4, name:'Sara'},
//   ]
//   return (
//     <div className="App">
// <User {...users[0]}/>
// <User {...users[1]}/>
// <User {...users[2]}/>
// <User {...users[3]}/>
//     </div>
//   );
// }
// export default App;



export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      users:[
        {id:1, name:'Somayeh'},
        {id:2, name:'Tohid'},
        {id:3, name:'Neda'},
        {id:4, name:'Sara'},
      ],
      scores: [12, 34, 74, 41],
      count :0
  
    }

    // this.clickHandler = this.clickHandler.bind(this)

    this.code = 25
  }
  //   setTimeout(()=> {

  //     this.setState({
  //      users: [
  //         {id:1, name:'leili'},
  //         {id:2, name:'Azade'},
  //         {id:3, name:'Zohreh'},
  //         {id:4, name:'Tala'},  
  //      ]
  //      } )

  //   },3000);
  // }


  clickHandler() {
    // alert('click shod')
    this.code=35
    console.log(this);
  } 

  changeUsersHandler(){


    // روش اول setState
    // this.setState({
    //        users: [
    //           {id:1, name:'leili'},
    //           {id:2, name:'Azade'},
    //           {id:3, name:'Zohreh'},
    //           {id:4, name:'Tala'},  
    //        ],
    //        scores : [21, 45, 78, 32]
    //        } )
  // روش دوم setState
    this.setState((prevState)=> {
  // console.log(prevState);
 return {count: prevState.count + 1}

    })
    

  }

  render() {
    return (
      <div>

      {/* 1) onclick shod baraye ma az hamin class App clickHandler ra farakhani kon(this ra barayash bind kon)
       dar metod clickHandler kalameye this be hamin class App eshare kond undefined nashavad */}
       
        <h1 onClick={this.clickHandler.bind(this)}> {this.code}</h1>


        {/* 2) use of arrow function: */}
{/* 
        <h1 onClick={()=> this.clickHandler()}> {this.code}</h1> */}

        {/* 3) bind ra dar constructor anjam midahim */}

         {/* <h1 onClick={this.clickHandler}> {this.code}</h1> */}

{/*   */}

         <button onClick= {this.changeUsersHandler.bind(this)}> change users</button>

         <h1>{this.state.count}</h1>

       <User {...this.state.users[0]}/>
       <User {...this.state.users[1]}/>
       <User {...this.state.users[2]}/>
       <User {...this.state.users[3]}/>
      
      </div>
    )
  }

}
