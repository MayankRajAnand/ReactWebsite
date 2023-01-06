import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

import './styles.css'

const GoogleKeep = () => {
    const [addItem, setItem] = useState([]);

    const addNote = (note) => {
        setItem((prevData) => {
            return [...prevData, note]
        })
    }
    const onDelete = (id) => {
        setItem((prevData) =>
            prevData.filter((curr, indx) => {
                return indx !== id
            })
        )
    }
    return (
        <>
            <Header />
            <Note passNote={addNote} />
            {
                addItem.map((el, ind) => {
                    return (
                        <AddNote
                            key={ind}
                            id={ind}
                            title={el.title}
                            content={el.content}
                            deleteItem={onDelete}
                        />
                    )
                })
            }

            <Footer />
        </>
    )
}
export default GoogleKeep;