import { Box } from "@mui/material";
import React, { useState } from "react";
import CardSingle from "../components/CardSingle";
import { EmployeeData } from "../types/Employee";

const SingleEmployee: React.FC = () => {
  const [selectedEmployee] = useState<EmployeeData | null>(null);

  return (
    <Box>
      {selectedEmployee ? (
        <CardSingle
          employee={selectedEmployee}
          onBackClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default SingleEmployee;
