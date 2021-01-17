import React from 'react'

function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>

        // if you use 'onClick={() => alert('click')}',
        // react will only call the function with a click
        // without '() =>', that causes to call the function everytime the component re-renders.
    );
}

// The DOM <button> element's onClick attribute has a special meaning to React
// because it is a built-in component
// You can name whatever to onClick prop or handleClick method
// In react on[something] names for props which represent events and 
// handle[Event] for the method which handle the events

export {
    Square
};