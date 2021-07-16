import React from 'react'

const List = (props) => {
    return(
        <div className= {`${props.listColor} p-4 w-24`} onClick={props.handleClick}>
            <button>{ props.actionName }</button>
        </div>
    )
}

export default List;
