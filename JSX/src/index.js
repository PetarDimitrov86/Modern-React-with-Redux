// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    return (
        <div>
            <label class="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
                Submit
            </button>
        </div>
    );
}

// Tke the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);