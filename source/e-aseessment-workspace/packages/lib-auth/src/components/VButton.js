import React from 'react'

const VButton = (props) => {
    return (
        <div>
            <h1>I am from Button123</h1>
            <button className='btn btn-warning'  onClick={handleAddButton}>{props.value}</button>
        </div>
    )
};

const handleAddButton = ()=>{
    console.log("===" + new Date());
}

export default VButton;