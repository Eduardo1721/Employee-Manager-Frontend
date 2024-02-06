import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployeeComponent = () => {
    // State variable to store the array of employees
    const [employeeArray, setEmployeeArray] = useState([]);

    // useEffect hook to fetch all employees when the component mounts
    useEffect(() => {
        getAllEmployee();
    }, []);

    // Function to fetch all employees from the API
    function getAllEmployee() {
        EmployeeService.getAllEmployee()
            .then(res => { setEmployeeArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }

    // Function to delete an employee
    function deleteEmployee(e, id) {
        e.preventDefault();
        // Call the deleteEmployee method from the service, then fetch all employees again
        EmployeeService.deleteEmployee(id).then(() => getAllEmployee()).catch(e => console.log(e));
    }

    return (
        <div className='container'>
            {/* Link to navigate to the Add Employee page */}
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
                    {/* Map through the array of employees and render each row */}
                    {employeeArray.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                {/* Link to navigate to the Update Employee page with the employee's ID */}
                                <Link to={`/add-employee/${employee.id}`} className='btn btn-outline-light mt-3' href="">Update</Link>{" "}
                                {/* Button to delete the employee */}
                                <a onClick={(e) => deleteEmployee(e, employee.id)} className='btn btn-outline-danger mt-3' href=' '>Delete</a>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;
// State Variable:

// employeeArray: State variable to store the array of employees.
// useEffect Hook:

// Uses the useEffect hook to fetch all employees when the component mounts.
// getAllEmployee Function:

// Fetches all employees from the API using EmployeeService.getAllEmployee() and updates the state.
// deleteEmployee Function:

// Deletes an employee by calling EmployeeService.deleteEmployee(id).
// After deletion, it fetches all employees again to update the list.
// Render:

// Renders a table with headers and a row for each employee, displaying their ID, first name, last name, and email.
// Provides options to update or delete each employee.
// Includes a link to navigate to the "Add Employee" page.
// Note: In the <tr> tag, I added a key attribute to uniquely identify each row based on the employee's ID. This is important for React to efficiently update the DOM when the array of employees changes.