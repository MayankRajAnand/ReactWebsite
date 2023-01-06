import React, { useState } from "react";

const AccordianList = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="main-heading">
                <p onClick={() => setShow(!show)}> {show ? " ➖ " : "➕"} </p>
                <h3>{question}</h3>
            </div>
            {
                show && <p className="answers">{answer}</p>
            }
        </>
    )

}
//we can pass (props) and then do props.question props.answer
//Here we are directly doing object destructuring.

export default AccordianList;