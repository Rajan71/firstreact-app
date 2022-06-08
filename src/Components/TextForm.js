import React, { useState } from 'react'

export default function TextForm() {
    const [value, setValue] = useState('')
    const [alert, setAlert] = useState(null)
    const onChangeText = (event) => {
        setValue(event.target.value)
    }

    const showAlert = (msg, type) => {
        setAlert({
            msg,
            type
        })
    }
    return (
        <>
            <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label">Tell Us</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" value={value} onChange={onChangeText} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <button className="btn btn-primary" onClick={() => {
                    setValue(value.toUpperCase());
                    showAlert('String is converted to upper case', 'success')
                }}>Convert to UpperCase</button>
            </div>
            <div className="container my-20px">
                <h1>Your Text Summary</h1>
                <p>{value.split(' ').length} words and {value.length} characters</p>
            </div>
            {alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{alert.type}</strong> {alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </>
    )
}
