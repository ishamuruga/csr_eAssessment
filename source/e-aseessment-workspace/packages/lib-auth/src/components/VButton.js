import React from 'react'

const VButton = (props) => {
    return (
        <div>
            <h1>I am from Button</h1>
            <button onClick={handleAddButton}>{props.value}</button>
        </div>
    )
};

const handleAddButton = ()=>{
    console.log("===" + new Date());
}

export default VButton;