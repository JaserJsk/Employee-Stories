import { EmployeeData } from "../types/Employee";
import { FilterType, FilterOrder } from "../types/Filter";

class FilterHelper {
  static filterBy(
    employees: EmployeeData[],
    filterType: FilterType,
    filterOrder: FilterOrder,
    searchValue: string
  ): EmployeeData[] {
    let filteredEmployees = [...employees];

    // If there is a search value, filter the employees by the filter type and search value
    if (searchValue) {
      filteredEmployees = filteredEmployees.filter((employee) =>
        employee[filterType]?.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Sort the filtered employees by the filter type and filter order
    filteredEmployees.sort((a, b) => {
      const compareResult = filterOrder === "Ascending" ? 1 : -1;
      return (
        compareResult * (a[filterType] ?? "").localeCompare(b[filterType] ?? "")
      );
    });

    return filteredEmployees;
  }
}

export default FilterHelper;
