import React, { useState } from "react";

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Note = (props) => {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const inputEvent = (el) => {
        const name = el.target.name;
        const value = el.target.value;
        //We can also do object destructuring
        // const {name,value}=e.target
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        })
    }
    const expandIt = () => {
        setExpand(true)
    }
    const shrinkIt = () => {
        setExpand(false)
    }

    return (
        <>
            <div className="main_note" onDoubleClick={shrinkIt}>
                <form>
                    {expand ?
                        <input
                            type="text"
                            placeholder="Title"
                            autoComplete="off"
                            name="title"
                            value={note.title}
                            onChange={inputEvent} />
                        : null}

                    <textarea rows="" column=""
                        placeholder="Write a note"
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                        onClick={expandIt}
                    >
                    </textarea>
                    {expand ?
                        <Button onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button>
                        : null}
                </form>
            </div>
        </>
    )
}
export default Note;