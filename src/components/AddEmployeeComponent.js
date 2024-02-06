import React, { useState, useEffect } from 'react';
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
    // Variables and methods to collect and store inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const employeeData = { firstName, lastName, email }; // Bundle the input from the user

    // Send data to API and navigate when successful
    function saveEmployee(e) {
        e.preventDefault();

        if (employeeData.firstName !== "" && employeeData.lastName !== "" && employeeData.email !== "") {
            // If id is present in the parameter, it should update; else, it should save
            if (id) {
                EmployeeService.updateEmployee(id, employeeData)
                    .then(() => navigate("/employee"))
                    .catch(e => console.log(e));
            } else {
                EmployeeService.saveEmployee(employeeData)
                    .then(() => navigate("/employee"))
                    .catch(e => console.log(e));
            }
        } else {
            alert("Please, fill in all inputs");
        }
    }

    function title() {
        return id ? "Update Employee" : "Add Employee";
    }

    useEffect(() => {
        // If id is present, fetch employee data for pre-filling the form
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                })
                .catch(e => console.log(e));
        }
    }, [id]);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{title()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        placeholder='Enter First Name'
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <input
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        placeholder='Enter Last Name'
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <input
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <button onClick={(e) => saveEmployee(e)} className='btn btn-success'>
                                    Save
                                </button>{" "}
                                <Link to={"/employee"} className='btn btn-danger' href="">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;


// Imports:
// Import necessary React components and hooks from the react library.
// Import the EmployeeService for making API calls.
// Import Link, useNavigate, and useParams from react-router-dom for navigation and accessing URL parameters.
// Functional Component:

// Define the functional component AddEmployeeComponent.
// State Variables:

// Use the useState hook to declare state variables firstName, lastName, and email to store input values.
// Hooks:

// Use the useNavigate and useParams hooks from react-router-dom to get the navigation function and URL parameters.
// Employee Data Object:

// Create an object employeeData to bundle the input data.
// saveEmployee Function:

// Define the saveEmployee function to handle the form submission.
// Validates that all fields are filled before making an API call.
// Calls EmployeeService.saveEmployee or EmployeeService.updateEmployee based on the presence of id.
// title Function:

// Define the title function to determine whether to display "Add Employee" or "Update Employee" based on the presence of id.
// useEffect Hook:

// Use the useEffect hook to fetch employee data when the component mounts if id is present.
// Form Rendering:

// Render a form with input fields for first name, last name, and email.
// Use the onChange event handlers to update the corresponding state variables.
// Set the input values to the state variables for controlled form behavior.
// Buttons:

// Render "Save" and "Cancel" buttons.
// Call the saveEmployee function when the "Save" button is clicked.
// Use Link from react-router-dom to navigate to the employee list when the "Cancel" button is clicked.
// Export:

// Export the AddEmployeeComponent for use in other components.