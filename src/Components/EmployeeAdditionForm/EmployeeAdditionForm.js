import React from "react";
import SingleSelectDropdown from "../UI/Dropdown/SingleSelectDropdown";
import InputTag from "../UI/InputTag/InputTag";
import { genderList, departments } from "../../Data/adminData";
import { Button } from "@mui/material";
import "./EmployeeAdditionForm.scss";
import { validateEmail } from "../../HighOrderFunctions/emailValidation";
const EmployeeAdditionForm = ({employeeDetail,setEmployeeDetail,cancelEmployeeAdditionToList,addEmployeeToListOfEmployees}) => {
  const handleChange = (value, identifier) => {
    console.log(value, identifier);
    let valuePassed = value;
    if (identifier === "department") {
      valuePassed = value["department"];
    } else if (identifier === "gender") {
      valuePassed = value["gender"];
    }
    setEmployeeDetail((prev)=>{
        return {
            ...prev,
            [identifier]:valuePassed
        }
    })
  };
  return (
    <div className="employeeAdditionForm__container">
      <div className="employeeAdditionForm__department">
        <SingleSelectDropdown
          label="Select Department"
          name="department"
          data={departments}
          value={employeeDetail["department"]}
          setValue={handleChange}
          placeholder="Select Department..."
          displayExpr="department"
        />
      </div>
      <div className="employeeAdditionForm__name">
        <InputTag
          label="Enter Employee Full Name"
          name="name"
          value={employeeDetail["name"]}
          setValue={handleChange}
          placeholder="Enter name..."
        />
      </div>
      <div className="employeeAdditionForm__emailAddress">
        <InputTag
          label="Enter Employee Email Address"
          name="email"
          value={employeeDetail["email"]}
          setValue={handleChange}
          inValidData ={!validateEmail(employeeDetail["email"])}
          placeholder="Enter email address..."
        />
      </div>
      <div className="employeeAdditionForm__gender">
        <SingleSelectDropdown
          data={genderList}
          label="Select Employee Gender"
          name="gender"
          value={employeeDetail["gender"]}
          setValue={handleChange}
          placeholder="Select Gender..."
          displayExpr="gender"
        />
      </div>
      <div className="employeeAdditionForm__buttons">
          <Button 
          variant="contained"
          color="error"
          style={{padding:"10px",borderRadius:"20px",backgroundColor:"red",width:"150px"}}
          onClick={cancelEmployeeAdditionToList}
          >Cancel</Button>
          <Button 
          variant="contained"
          style={{padding:"10px",borderRadius:"20px",backgroundColor:"#1A76D2",width:"150px"}}
          onClick={addEmployeeToListOfEmployees}
          disabled={!validateEmail(employeeDetail["email"])}
          >Submit</Button>
      </div>
    </div>
  );
};

export default EmployeeAdditionForm;
