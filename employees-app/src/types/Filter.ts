import { EmployeeData } from "./Employee";

export type FilterType = "name" | "office";
export type FilterOrder = "Ascending" | "Descending";

export type EmployeeFilterProps = {
  employees: EmployeeData[];
  onFilter: (filteredEmployees: EmployeeData[]) => void;
};
