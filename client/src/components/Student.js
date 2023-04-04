import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
const Student = () => {
    const [studentData, setStudentData] = useState([])
    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/students')
        console.log(response.data)
        setStudentData(response.data)
    }
    const handleClick = async(id) =>{
        try {
            // console.log(id)
            const response = axios.delete(`http://localhost:5000/students/${id}`)
            
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Alert className="text-center mt-3" variant="primary">
                <h1>student details are</h1>
            </Alert>
            <Container>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Marks</th>
                            <th>Class</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                        studentData.map((item, index, arr)=>{
                            return(
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.marks}</td>
                                <td>{item.class}</td>
                                <td> <Button className="btn btn-danger" onClick={()=>{handleClick(item._id) ;}}>Delete</Button> </td>
                            </tr>
                            )
                        })
                       }
                    </tbody>
                </Table>

            </Container>
        </>
    )
}

export default Student;