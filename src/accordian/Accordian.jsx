import React from "react";
import { questions } from './api';
import AccordianList from "./AccordianList";
const Accordian = () => {
    return (
        <>

            <section className="main-div">
                <h1>React Interview Questions</h1>

                {
                    questions.map((el, ind) => {
                        return (
                            <AccordianList key={ind} {...el} />
                        )
                    })
                }
            </section>

        </>
    )
}
export default Accordian;