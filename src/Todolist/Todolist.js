import Todoinput from './Todoinput';
import Todoing from './Todoing';
import React, { Component } from 'react';
import './todo.css';

export default class Todolist extends Component {
	constructor(){
        super();
        let todo = JSON.parse(localStorage.getItem('key')) ;
        if(todo == null){
          this.state = {
            todo:[]
		      }
        }
        else{
          this.state = {
            todo:todo,
		      }
        }
     console.log(this.state.todo);
	}
  addItem=(data)=>{
    var data1 = {"key":data,"checked":false}
    this.setState({
      todo:[...this.state.todo,data1]
  })   
  }
  changeItem=(idx)=>{
    this.state.todo[idx].checked=true;
    let todo=this.state.todo;
    this.setState({todo:todo})
  }
  tranItem=(idx)=>{
    this.state.todo[idx].checked=false;
    let todo=this.state.todo;
    this.setState({todo:todo})
  }

	delItem = (idx)=>{
       this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo: state.todo.filter((item,index)=>idx!==index)
            }
    })    
  }
  render() {
    let doing=0;
    let done = 0;
    console.log(this.state.todo);
    this.state.todo.forEach((item)=>{
        if(item.checked == false){
            doing++;
        }
        else{
            done++;
        }
    })
    localStorage.setItem('key',JSON.stringify(this.state.todo));
    return (
      <div>
		    <Todoinput add={this.addItem}/>
        <Todoing del={this.delItem} todo={this.state.todo} changeItem={this.changeItem} tranItem={this.tranItem} doing={doing} done={done}/>
      </div>
    );
  }
}
