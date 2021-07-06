import React, {useState} from 'react';

function Counter(){
    const [count, setCount]=useState(0);

    const handleIncrement=()=>{
        setCount((prevCount)=>prevCount+1);
    };

    const handleDecrement=()=>{
        setCount((prevCount)=>prevCount-1);
    };
    return(
        <div style={{textAlign:"center" }} >
            <div>
            <span>
            <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."
                height="100%" style={{backgroundSize:"cover", backgroundRepeat:"no-repeat"}}/>
            
                
                <h2>Count is {count}</h2>
                <button onClick={handleIncrement}>Inc</button>
                <button onClick={()=>setCount(0)}>Reset</button>
                <button onClick={handleDecrement} style={{color:"red"}}>Dec</button>
                </span>
            </div>
        </div>
    );
}
export default Counter;