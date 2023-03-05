import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import FilterHelper from "../helpers/FilterHelper";
import { FilterType, FilterOrder, EmployeeFilterProps } from "../types/Filter";

function FilterSearch({ employees, onFilter }: EmployeeFilterProps) {
  const [filterType, setFilterType] = useState<FilterType>("name");
  const [filterOrder, setFilterOrder] = useState<FilterOrder>("Ascending");
  const [searchValue, setSearchValue] = useState("");

  const handleFilterTypeChange = (event: SelectChangeEvent<FilterType>) => {
    setFilterType(event.target.value as FilterType);
    setSearchValue("");
  };

  const handleFilterOrderChange = (event: SelectChangeEvent<FilterOrder>) => {
    setFilterOrder(event.target.value as FilterOrder);
    setSearchValue("");
  };

  const handleSearchValueChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setSearchValue(event.target.value);
  };

  const applyFilter = () => {
    const filteredEmployees = FilterHelper.filterBy(
      employees,
      filterType,
      filterOrder,
      searchValue
    );
    onFilter(filteredEmployees);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
      <FormControl sx={{ mr: 2 }}>
        <InputLabel id="filter-type-label">Filter By</InputLabel>
        <Select
          labelId="filter-type-label"
          id="filter-type-select"
          value={filterType}
          label="Filter By"
          onChange={handleFilterTypeChange}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="office">Office</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mr: 2 }}>
        <InputLabel id="filter-order-label">Order By</InputLabel>
        <Select
          labelId="filter-order-label"
          id="filter-order-select"
          value={filterOrder}
          label="Order By"
          onChange={handleFilterOrderChange}
        >
          <MenuItem value="Ascending">Ascending</MenuItem>
          <MenuItem value="Descending">Descending</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mr: 2 }}>
        <TextField
          id="search-input"
          label="Search"
          value={searchValue}
          onChange={handleSearchValueChange}
          inputProps={{ "aria-label": "Search" }}
        />
      </FormControl>
      <Button variant="contained" onClick={applyFilter} aria-label="Filter">
        Filter
      </Button>
    </Box>
  );
}

export default FilterSearch;
