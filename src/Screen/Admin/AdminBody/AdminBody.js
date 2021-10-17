import React, { useState, useEffect } from "react";
import "./AdminBody.scss";
import { Button } from "@mui/material";
import MultiSelectDropdown from "../../../Components/UI/Dropdown/MultiSelectDropdown";
import { departments, EmployeeDetails } from "../../../Data/adminData";
import AdminBodyTable from "../../../Components/ScreenComponents/Admin/AdminBodyTable/AdminBodyTable";
import TransitionsModal from "../../../Components/UI/Modal/ModalTag";
import EmployeeAdditionForm from "../../../Components/EmployeeAdditionForm/EmployeeAdditionForm";
const AdminBody = () => {
  const [listOfEmployees, setListOfEmployees] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [showAddItemsModal, setShowAddItemsModal] = useState(false);
  const [employeeDetail, setEmployeeDetail] = useState({
    department: "",
    email: "",
    gender: "",
    name: "",
  });

  // function to update selected DepartmentData from dropdown
  const choseCategory = (departmentData) => {
    setFilteredCategory(departmentData);
  };

  useEffect(() => {
    setListOfEmployees(EmployeeDetails);
  }, []);

  // filtering Employee Details on Basis of selected Departments
  const filterEmployeeDetailsOnBasisOfDepartment = (employeeDetails) => {
    let departmentsSelected = filteredCategory;
    let tempEmployeeList = [];
    if (Array.isArray(employeeDetails) && departmentsSelected.length > 0) {
      // creating array containing list of department
      let tempDepartment = departmentsSelected.map((item) => item.department);

      // filtering employee list
      tempEmployeeList = employeeDetails.filter((employee) => {
        return tempDepartment.indexOf(employee.department) > -1;
      });
      return tempEmployeeList;
    } else {
      return employeeDetails;
    }
  };

  // employee Addition Function Handles

  const cancelEmployeeAdditionToList = () => {
    setEmployeeDetail({
      department: "",
      email: "",
      gender: "",
      name: "",
    });
    setShowAddItemsModal(false);
  };

  const addEmployeeToListOfEmployees = () => {
    let tempListOfEmployees = [...listOfEmployees];
    let tempNewEmployee = { ...employeeDetail };
    tempNewEmployee["id"] = tempListOfEmployees.length + 1;
    setListOfEmployees((prev) => [...prev, tempNewEmployee]);
    cancelEmployeeAdditionToList();
};

const deleteEmployeeFromListOfEmployees =(employeeId)=>{
      let tempListOfEmployees = [...listOfEmployees];
      let filteredListOfEmployees = tempListOfEmployees.filter((employee)=>employee.id !==employeeId);
      setListOfEmployees(filteredListOfEmployees);
      
  }

  return (
    <div className="adminBody__container">
      <div className="adminBody__additionAndfiltering">
        <div className="adminBody__addition">
          <Button
            variant="contained"
            color="primary"
            className="adminBody__additionButton"
            onClick={() => setShowAddItemsModal(true)}
          >
            Add an Employee
          </Button>
          {showAddItemsModal && (
            <TransitionsModal
              showModal={showAddItemsModal}
              setShowModal={setShowAddItemsModal}
              modalHeader="Add Employee to List"
            >
              <EmployeeAdditionForm
                employeeDetail={employeeDetail}
                setEmployeeDetail={setEmployeeDetail}
                cancelEmployeeAdditionToList={cancelEmployeeAdditionToList}
                addEmployeeToListOfEmployees={addEmployeeToListOfEmployees}
              />
            </TransitionsModal>
          )}
        </div>
        <div className="adminBody__filteringDetails">
          <div className="adminBody__filteringDropdown">
            <MultiSelectDropdown
              label="Filter Employees: "
              data={departments}
              displayExpr="department"
              value={filteredCategory}
              setValue={choseCategory}
              showClearButton={true}
            />
          </div>
        </div>
      </div>
      <div className="adminBody__table">
        <AdminBodyTable
          details={filterEmployeeDetailsOnBasisOfDepartment(listOfEmployees)}
          deleteEmployeeFromListOfEmployees={deleteEmployeeFromListOfEmployees}
        />
        {/* <EmployeeAdditionForm /> */}
      </div>
    </div>
  );
};

export default AdminBody;
