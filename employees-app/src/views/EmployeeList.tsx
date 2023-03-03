import { Grid } from "@mui/material";
import EmployeeMedia from "../components/EmployeeMedia";
import { Employee } from "../types/Employee";

function EmployeeList({
  employees,
  currentPage,
  employeesPerPage,
  viewMode,
}: {
  employees: Employee[];
  currentPage: number;
  employeesPerPage: number;
  viewMode: "grid" | "list";
}) {
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <Grid container spacing={4}>
      {currentEmployees.map((employee) => (
        <Grid item key={employee.name} xs={12} sm={6} md={3}>
          <EmployeeMedia employee={employee} viewMode={viewMode} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmployeeList;
