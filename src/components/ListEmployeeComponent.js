import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const ListEmployeeComponent = () => {
    const [employeeArray, setEmployeeArray] = useState([]);

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
            .then(res => { setEmployeeArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }
    function deleteEmployee(e, id) {
        e.preventDefault()
        EmployeeService.deleteEmployee(id).then(getAllEmployee()).catch(e => console.log(e));
    }


    return (
        <div className='container'>
            <Link to={"/add-employee"} className='btn btn-outline-light mb-2 mt-3' href="">Add Employee</Link>
            <h1 className='title'>List Of Employees</h1>
            <table className='littleTitle'>
                <thead className='topp'>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {employeeArray.map(employee =>
                        <tr id={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link to={`/add-employee/${employee.id}`} className='btn btn-outline-light mt-3' href="">Update</Link> {" "}
                                <a onClick={(e) => deleteEmployee(e, employee.id)} className='btn btn-outline-danger mt-3' href=' '>Delete</a>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent