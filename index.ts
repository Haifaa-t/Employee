
import { addEmployee, getAllEmployees, getEmployeeById, updateEmployee, removeEmployee } from './employee';


addEmployee({ id: 3, name: 'Haifa', position: 'Developer', salary: 6000 });
addEmployee({ id: 4, name: 'Ali', position: 'HR', salary: 5000 });


console.log('All Employees:', getAllEmployees());


console.log('Employee with ID 1:', getEmployeeById(1));

updateEmployee(2, { position: 'Manager', salary: 12000 });


removeEmployee(3);


console.log('All Employees after removal:', getAllEmployees());
