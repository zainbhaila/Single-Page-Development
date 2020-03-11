import React from 'react';
import './css/bootstrap.css';

class ShoppingItem extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            count: this.props.startCount,
            cost: this.props.price*this.props.startCount
            
        }

    }

    increment(){
        
        this.setState((prevState, props) => {
            return {count: prevState.count+1, cost: this.props.price*(prevState.count+1)};
        }

        );
    }


    decrement(){


        this.setState((prevState, props) => {
            if(prevState.count>0){
                return {count: prevState.count-1, cost: this.props.price*(prevState.count-1)};
            }else{
                return {};
            }
            
        
        }
        );
    }


    render(){
        return (<div>
            <p>{this.props.name} &emsp;&emsp;&emsp;&emsp;
                <button type="button" className="btn btn-success" onClick = {()=>{this.increment()}}>+</button>&emsp;&emsp;&emsp;&emsp;
                <button type="button" className="btn btn-danger"onClick = {()=>{this.decrement()} }>-</button>&emsp;&emsp;&emsp;&emsp;
                {this.state.count}&emsp;&emsp;&emsp;&emsp;
                {this.state.cost}
            
                </p>         

        </div>

        )
    }



}


export default ShoppingItem;