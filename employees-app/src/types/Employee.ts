export type EmployeeData = {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  office?: string;
  manager?: string;
  orgUnit?: string;
  mainText?: string;
  stackOverflow?: string;
  linkedIn?: string;
  gitHub?: string;
  twitter?: string;
  imagePortraitUrl?: string;
  imageWallOfLeetUrl?: string;
  highlighted?: boolean;
  published?: boolean;
};

export type SingleEmployeeProps = {
  employee: EmployeeData;
};

export type AllEmployeesProps = {
  employees: EmployeeData[];
};
