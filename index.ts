console.log("------Welcome To Tamkeen Employee Management System-----");

import { addEmployee, getAllEmployees, getEmployeeById, updateEmployee, removeEmployee } from './employee';

//-------------------------------------------------------------------
//-------------------------------------------------------------------
addEmployee({ id: 1, name: 'Adam', position: 'Manager', salary: 10000 });
addEmployee({ id: 2, name: 'Ftima', position: 'Developer', salary: 6000 });
//-------------------------------------------------------------------
console.log("All Employees:", getAllEmployees());
//-------------------------------------------------------------------
console.log("Employee with ID 1:", getEmployeeById(1));
console.log("Employee with ID 23:", getEmployeeById(23));
//-------------------------------------------------------------------
updateEmployee(2, { salary: 90000 });
//-------------------------------------------------------------------
removeEmployee(2);
//-------------------------------------------------------------------
console.log("All Employees after removal:", getAllEmployees());
