import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phoneno: "",
        email: "",
        message: ""
    })
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }

        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${data.fullname} having phone number ${data.phoneno} and email id ${data.email} giving a message ${data.message}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div className="col-md-6 col-10 mx-auto">
                            <div className="mb-3">
                                <label className="form-label">Enter Fullname</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Enter Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phoneno" value={data.phoneno} onChange={inputEvent} placeholder="Enter your number" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Enter Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="messsage" value={data.messafge} onChange={inputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit Form</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;