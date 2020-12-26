/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
    return (
    <div>
        {/* <Accordion items={items}/> */}
        {/* <Search /> */}
        <Dropdown options={options} />
    </div>)
};