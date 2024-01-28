import { useState } from "react"

export const AddStudent = ({addStudent}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !age){
            alert("Please enter name and age")
            return
        }
        else{
            addStudent(name, age)
            setName("")
            setAge("")
        }
    }
    return (
        <div className="container my-3 fw-bold">
            <h3 className="mb-4" style={{color: 'Green'}}>Add Student</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row ">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName" />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="inputAge" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}