import axios from "axios";

const BASE_URL = "http://localhost:8081/Employee";

class EmployeeService {
    // Method to get all employees from the API or database
    getAllEmployee() {
        return axios.get(BASE_URL);
    }

    // Method to save an employee
    saveEmployee(employeeData) {
        return axios.post(BASE_URL, employeeData);
    }

    // Method to update an employee by ID
    updateEmployee(id, employeeData) {
        return axios.put(`${BASE_URL}/${id}`, employeeData);
    }

    // Method to get an employee by ID
    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    // Method to delete an employee by ID
    deleteEmployee(id) {
        return axios.delete(BASE_URL + "/" + id);
    }
}

// Creating an instance of the EmployeeService class
const employeeServiceInstance = new EmployeeService();

// Exporting the instance to be used in other parts of the application
export default employeeServiceInstance;


// BASE_URL:

// A constant variable that holds the base URL for the employee-related API endpoints.
// EmployeeService Class:

// A class that encapsulates methods for interacting with the employee-related API.
// Methods:

// getAllEmployee: Fetches all employees from the API.
// saveEmployee: Saves a new employee to the API.
// updateEmployee: Updates an existing employee using their ID.
// getEmployeeById: Fetches a specific employee by their ID.
// deleteEmployee: Deletes an employee by their ID.
// Instance:

// Creates an instance of the EmployeeService class named employeeServiceInstance.
// Export:

// Exports the employeeServiceInstance for use in other parts of the application.