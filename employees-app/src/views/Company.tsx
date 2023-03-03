import { Box, Container, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { EmployeeProps } from "../types/Employee";
import PagePagination from "../helpers/Pagination";
import EmployeeList from "./EmployeeList";
import EmployeeMedia from "../components/EmployeeMedia";

function Company({
  employees,
  viewMode,
}: EmployeeProps & { viewMode: "grid" | "list"; toggleViewMode: () => void }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [employeesPerPage, setEmployeesPerPage] = useState<number>(8);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // If List View is selected, set the employeesPerPage to 8
    if (viewMode === "list") {
      setEmployeesPerPage(8);
    }
  }, [viewMode]);

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="xl">
        {viewMode === "grid" ? (
          <EmployeeList
            employees={employees}
            currentPage={currentPage}
            employeesPerPage={employeesPerPage}
            viewMode={viewMode} // pass viewMode to EmployeeList
          />
        ) : (
          <List>
            {employees
              .slice(
                (currentPage - 1) * employeesPerPage,
                currentPage * employeesPerPage
              )
              .map((employee) => (
                <ListItem key={employee.name}>
                  <EmployeeMedia employee={employee} viewMode={viewMode} />
                </ListItem>
              ))}
          </List>
        )}
        <PagePagination
          currentPage={currentPage}
          employeesPerPage={employeesPerPage}
          totalEmployees={employees.length}
          onPageChange={handlePageChange}
        />
      </Container>
    </Box>
  );
}

export default Company;
