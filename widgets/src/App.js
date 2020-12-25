/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
    return (
    <div>
        {/* <Accordion items={items}/> */}
        <Search />
    </div>)
};