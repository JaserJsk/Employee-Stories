import { Grid } from "@mui/material";
import CardViews from "../components/CardViews";
import { EmployeeData } from "../types/Employee";

function EmployeeList({
  employees,
  currentPage,
  employeesPerPage,
  viewMode,
  onEmployeeSelect,
}: {
  employees: EmployeeData[];
  currentPage: number;
  employeesPerPage: number;
  viewMode: "grid" | "list";
  onEmployeeSelect: (employee: EmployeeData) => void;
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
          <CardViews
            employees={employee}
            viewMode={viewMode}
            onEmployeeSelect={onEmployeeSelect}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmployeeList;
