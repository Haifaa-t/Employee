
import fs from 'fs';
import path from 'path';

export interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}


const employeesFilePath = path.join(__dirname, 'data', 'employees.json');


function readEmployees(): Employee[] {
    const rawData = fs.readFileSync(employeesFilePath, 'utf-8');
    return JSON.parse(rawData);
}


function writeEmployees(employees: Employee[]): void {
    fs.writeFileSync(employeesFilePath, JSON.stringify(employees, null, 2), 'utf-8');
}


export function addEmployee(newEmployee: Employee): void {
    const employees = readEmployees();
    employees.push(newEmployee);  
    writeEmployees(employees);  
    console.log('Employee added:', newEmployee);
}


export function getAllEmployees(): Employee[] {
    return readEmployees();  
}


export function getEmployeeById(id: number): Employee | undefined {
    const employees = readEmployees();
    return employees.find(emp => emp.id === id);  
}


export function updateEmployee(id: number, updatedEmployee: Partial<Employee>): boolean {
    const employees = readEmployees();
    const employeeIndex = employees.findIndex(emp => emp.id === id);
    
    if (employeeIndex !== -1) {
        const updatedEmployeeObject: Employee = {
            ...employees[employeeIndex],
            ...updatedEmployee,
        };
        
        employees[employeeIndex] = updatedEmployeeObject; 
        writeEmployees(employees); 
        console.log('Employee updated:', updatedEmployeeObject);
        return true;
    }

    return false;  
}


export function removeEmployee(id: number): boolean {
    const employees = readEmployees();
    const employeeIndex = employees.findIndex(emp => emp.id === id);
    
    if (employeeIndex !== -1) {
        const [removedEmployee] = employees.splice(employeeIndex, 1);  
        writeEmployees(employees);  
        console.log('Employee removed:', removedEmployee);
        return true;
    }

    return false;  
}
