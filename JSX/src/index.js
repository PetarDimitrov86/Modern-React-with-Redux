// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    const buttonText = 'Click me!'
    const buttonStyle = { backgroundColor: 'blue', color: 'white'};
    const labelText = 'Enter name:'
    // const invalidVariable = { text: 'Invalid click me!' };

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={buttonStyle}>
                {/* correct */}
                {buttonText}               
                {/* wrong
                {invalidVariable} */}
            </button>
        </div>
    );
}

// Tke the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);