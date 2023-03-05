import React from "react";
import { Box, Pagination } from "@mui/material";

function PagePagination({
  currentPage,
  employeesPerPage,
  totalEmployees,
  onPageChange,
}: {
  currentPage: number;
  employeesPerPage: number;
  totalEmployees: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}) {
  // Calculate the total number of pages based on the total number of employees and the number of employees displayed per page
  const totalPages = Math.ceil(totalEmployees / employeesPerPage);

  // Render the Pagination component from MUI, passing in the relevant props
  return (
    <Box className="pagination">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        shape="rounded"
        size="large"
        showFirstButton
        showLastButton
        // Conditionally hide the pagination if there's only one page to show
        sx={{
          ...(totalPages === 1 && { display: "none" }),
        }}
      />
    </Box>
  );
}

export default PagePagination;
