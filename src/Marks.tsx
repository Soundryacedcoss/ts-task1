import React, { ChangeEvent, useState } from 'react'
type marksProp = {
    books: {
        id: number,
        name: string
    }[],
    marks: number[]
}
export const Marks = (props: marksProp) => {
    const [email, setEmail] = useState("")
    const [emailId, setEmailId] = useState("")
    const InputBoxHAndler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const GetEmailHAndler = () => {
        if (email==="") {
            alert("PLease enter mail")
            document.getElementById("email")?.focus()
        }
        else{
            setEmailId(email)
            setEmail("")
        }
       
    }
    return (
        <div>
            <center>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BookName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.books.map((val) => <tr><td>{val.id}</td><td>{val.name}</td> </tr>)}
                    </tbody>
                </table>
            </center>
            <h3>Marks</h3>
            {props.marks.map((item) => <p>{item}</p>)}
            <center>
                <div className="input-group mb-3 w-25">
                    <span className="input-group-text">Email</span>
                    <input type="text" value={email} id="email" className="form-control" placeholder="Email" aria-label="Server" onChange={InputBoxHAndler} />
                </div>
            </center>
            <button className='btn btn-info' onClick={GetEmailHAndler}>
                Get email
            </button>
            <p>{emailId}</p>
        </div>
    )
}
