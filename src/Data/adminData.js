export const departments = [
  {
    id: 1,
    department: "Admin",
  },
  {
    id: 2,
    department: "Engineering",
  },
  {
    id: 3,
    department: "Finance",
  },
  {
    id: 4,
    department: "HR",
  },
  {
    id: 5,
    department: "IT",
  },
];

class Employee {
  constructor(id, department, name, gender, email) {
    this.id = id;
    this.department = department;
    this.name = name;
    this.gender = gender;
    this.email = email;
  }
}

export const EmployeeDetails = [
  new Employee(1, "Admin", "Neeraj", "Male", "Neeraj@gmail.com"),
  new Employee(2, "Admin", "Prateek", "Male", "Prateek@gmail.com"),
  new Employee(3, "Admin", "Anup", "Male", "Anup@gmail.com"),
  new Employee(4, "Admin", "Sandeep", "Male", "Sandeep@gmail.com"),
  new Employee(5, "Engineering", "Rajveer", "Male", "Rajveer@gmail.com"),
  new Employee(6, "Engineering", "Sanvi", "Female", "Sanvi@gmail.com"),
  new Employee(7, "Engineering", "Manu", "Female", "Manu@gmail.com"),
  new Employee(8, "Engineering", "Liza", "Female", "Liza@gmail.com"),
  new Employee(9, "Finance", "Rohit", "Male", "Rohit@gmail.com"),
  new Employee(10, "Finance", "Shubham", "Male", "Shubham@gmail.com"),
  new Employee(11, "Finance", "Utkarsh", "Male", "Utkarsh@gmail.com"),
  new Employee(12, "Finance", "Rahul", "Male", "Rahul@gmail.com"),
  new Employee(13, "HR", "Sundeep", "Male", "Sundeep@gmail.com"),
  new Employee(14, "HR", "Tapesh", "Male", "Tapesh@gmail.com"),
  new Employee(15, "HR", "Sanjay", "Male", "Sanjay@gmail.com"),
  new Employee(16, "HR", "Satya", "Male", "Satya@gmail.com"),
  new Employee(17, "IT", "Rajesh", "Male", "Rajesh@gmail.com"),
  new Employee(18, "IT", "Chandan", "Male", "Chandan@gmail.com"),
  new Employee(19, "IT", "Prithul", "Male", "Prithul@gmail.com"),
  new Employee(20, "IT", "Ramesh", "Male", "Ramesh@gmail.com"),
];

export const genderList = [
  {
    id: 1,
    gender: "Male",
  },
  {
    id: 2,
    gender: "Female",
  },
];
