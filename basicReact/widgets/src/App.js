import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'



export default () => {
    const items = [
        {
            title: "What is React",
            content: "React is a js framework"
        },
        {
            title: "Who are you",
            content: "number 2"
        },
        {
            title: "Who are you3",
            content: "number 3"
        }
    ]

    const options = [
        {
            label: "Red",
            value: "red"
        },
        {
            label: "Blue",
            value: "blue"
        },
        {
            label: "Green",
            value: "green"
        }
    ]

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}


