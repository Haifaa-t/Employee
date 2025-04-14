export interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
  }
  
  let employees: Employee[] = [];
  
  export function addEmployee(newEmployee: Employee): void {
    employees.push(newEmployee);
    console.log("Employee added:", newEmployee);
  }

  export function getAllEmployees(): Employee[] {
    return employees;
  }

  export function getEmployeeById(id: number): Employee | undefined {
    return employees.find(emp => emp.id === id);
  }
  
  // Update an existing employee
  export function updateEmployee(id: number, updatedEmployee: Partial<Employee>): boolean {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      Object.assign(employee, updatedEmployee);
      console.log("Employee updated:", employee);
      return true;
    }
    return false;
  }
  
  // Remove an existing employee
  export function removeEmployee(id: number): boolean {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      const [removedEmployee] = employees.splice(index, 1);
      console.log("Employee removed:", removedEmployee);
      return true;
    }
    return false;
  }
  