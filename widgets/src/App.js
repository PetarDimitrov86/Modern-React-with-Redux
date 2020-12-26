/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'Front-end framework'
    },
    {
        title: 'Why use React?',
        content: 'It is popular'
    },
    {
        title: 'How do you use React?',
        content: 'You use it by creating components'
    },
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    },
]

export default () => {  
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
    <div>
        {/* <Accordion items={items}/> */}
        {/* <Search /> */}
        {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {showDropdown && 
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options} />
        } */}
        <Translate />
    </div>)
};