import React from "react";
var Increment=React.createClass({
getInialState:function(){
    return {
        counter:0
    };
},
increment: function(){
    this.setState({
        counter:this.state.counter+1
    });
},
decrement: function(){
    this.setState({
        counter:this.state.counter-1
    });
},

render:function(){
    return <div>
        <div id="counter">{this.state.counter}</div>
        <button onClick={this.increment}>Adding 1</button>
        <button onClick={this.decrement}>Removing 1</button>
    </div>
}
});

React.render(<Increment />,document.getElementById('count'))