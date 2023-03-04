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
  const totalPages = Math.ceil(totalEmployees / employeesPerPage);
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
        sx={{
          ...(totalPages === 1 && { display: "none" }),
        }}
      />
    </Box>
  );
}

export default PagePagination;
