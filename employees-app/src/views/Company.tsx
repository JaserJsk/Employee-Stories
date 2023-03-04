import { Box, Container, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { EmployeeData, AllEmployeesProps } from "../types/Employee";
import PagePagination from "../helpers/Pagination";
import EmployeeList from "./EmployeeList";
import CardViews from "../components/CardViews";
import CardSingle from "../components/CardSingle";

function Company({
  employees,
  viewMode,
}: AllEmployeesProps & {
  viewMode: "grid" | "list";
  toggleViewMode: () => void;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [employeesPerPage, setEmployeesPerPage] = useState<number>(8);
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(
    null
  );
  const [showCardViews, setShowCardViews] = useState<boolean>(true);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleEmployeeSelect = (employee: EmployeeData) => {
    setSelectedEmployee(employee);
    setShowCardViews(false);
  };

  const handleCardSingleBackClick = () => {
    setSelectedEmployee(null);
    setShowCardViews(true);
  };

  useEffect(() => {
    if (viewMode === "list") {
      setEmployeesPerPage(8);
    }
  }, [viewMode]);

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="xl">
        {showCardViews && viewMode === "grid" ? (
          <EmployeeList
            employees={employees}
            currentPage={currentPage}
            employeesPerPage={employeesPerPage}
            viewMode={viewMode}
            onEmployeeSelect={handleEmployeeSelect}
          />
        ) : showCardViews && viewMode === "list" ? (
          <List>
            {employees
              .slice(
                (currentPage - 1) * employeesPerPage,
                currentPage * employeesPerPage
              )
              .map((items) => (
                <ListItem key={items.name}>
                  <CardViews
                    employees={items}
                    viewMode={viewMode}
                    onEmployeeSelect={handleEmployeeSelect}
                  />
                </ListItem>
              ))}
          </List>
        ) : (
          <CardSingle
            employee={selectedEmployee!}
            onBackClick={handleCardSingleBackClick}
          />
        )}
        {showCardViews && (
          <PagePagination
            currentPage={currentPage}
            employeesPerPage={employeesPerPage}
            totalEmployees={employees.length}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </Box>
  );
}

export default Company;
