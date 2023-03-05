import FilterHelper from "../helpers/FilterHelper";
import { EmployeeData } from "../types/Employee";
import { FilterType, FilterOrder } from "../types/Filter";

describe("FilterHelper", () => {
  const employees: EmployeeData[] = [
    { name: "Therese", office: "Lund" },
    { name: "Thomas", office: "Borlänge" },
    { name: "Esma", office: "Helsingborg" },
    { name: "David", office: "Stockholm" },
  ];

  test("it should filter employees by name", () => {
    const searchValue = "t";
    const filterType: FilterType = "name";
    const filterOrder: FilterOrder = "Ascending";

    const filteredEmployees = FilterHelper.filterBy(
      employees,
      filterType,
      filterOrder,
      searchValue
    );

    expect(filteredEmployees.length).toBe(2);
    expect(filteredEmployees[0].name).toBe("Therese");
    expect(filteredEmployees[1].name).toBe("Thomas");
  });

  test("it should filter employees by office", () => {
    const searchValue = "o";
    const filterType: FilterType = "office";
    const filterOrder: FilterOrder = "Descending";

    const filteredEmployees = FilterHelper.filterBy(
      employees,
      filterType,
      filterOrder,
      searchValue
    );

    expect(filteredEmployees.length).toBe(3);
    expect(filteredEmployees[0].office).toBe("Stockholm");
    expect(filteredEmployees[1].office).toBe("Helsingborg");
    expect(filteredEmployees[2].office).toBe("Borlänge");
  });
});
