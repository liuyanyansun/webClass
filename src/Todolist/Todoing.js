import React, { Component } from 'react';

export default class Todoing extends Component {
    
  render() {
    var {todo} = this.props;
    
    return (
        <div>
           <h2>正在进行 
              <span>
                  {this.props.doing}
               </span>
            </h2>
			<ul>
            {
                todo.map((item,idx)=>{
                    
                    if(item.checked == false){
                        return(
                            <li key={idx}>
                            <input type="checkbox" onClick={()=>this.props.changeItem(idx)}></input>
                           
                            {item.key}---<button onClick={()=>this.props.del(idx)}>删除</button>
                            </li>
                    )}
                })        
            }
			</ul>
			<h2>已经完成 
                <span >
                    {
                        this.props.done
                    }
                </span>
            </h2>
			<ul>
            {
                todo.map((item,idx)=>{
                    if(item.checked == true){
                        console.log(todo);
                        return(
                            <li key={idx}>
                            <input type="checkbox" onClick={()=>this.props.tranItem(idx)}></input>
                            {item.key}---<button onClick={()=>this.props.del(idx)}>删除</button>
                            </li>
                    )}
                })                                  
            }
			</ul>
        </div>
    );
  }
}
