import React, { useEffect, useState } from "react";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { EmployeeData, AllEmployeesProps } from "../types/Employee";
import PagePagination from "../helpers/Pagination";
import EmployeeList from "./EmployeeList";
import CardViews from "../components/CardViews";
import CardSingle from "../components/CardSingle";
import FilterSearch from "../components/FilterSearch";
import FilterHelper from "../helpers/FilterHelper";

function Company({
  employees: allEmployees,
  viewMode,
  toggleViewMode,
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
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeData[]>(
    []
  );
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

  const handleFilter = (filteredEmployees: EmployeeData[]) => {
    setFilteredEmployees(filteredEmployees);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Perform initial filter when page is mounted
    const filteredEmployees = FilterHelper.filterBy(
      allEmployees,
      "name",
      "Ascending",
      ""
    );
    setFilteredEmployees(filteredEmployees);
  }, [allEmployees]);

  useEffect(() => {
    if (viewMode === "list") {
      setEmployeesPerPage(8);
    }
  }, [viewMode]);

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="xl">
        {showCardViews && (
          <FilterSearch employees={allEmployees} onFilter={handleFilter} />
        )}
        {filteredEmployees.length === 0 ? (
          <Box sx={{ my: 30 }}>
            <Typography variant="h4" align="center" color="text.primary">
              There is nothing here!
            </Typography>
          </Box>
        ) : showCardViews && viewMode === "grid" ? (
          <EmployeeList
            employees={filteredEmployees}
            currentPage={currentPage}
            employeesPerPage={employeesPerPage}
            viewMode={viewMode}
            onEmployeeSelect={handleEmployeeSelect}
          />
        ) : showCardViews && viewMode === "list" ? (
          <List>
            {filteredEmployees
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
            totalEmployees={filteredEmployees.length}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </Box>
  );
}

export default Company;
