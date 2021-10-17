import React from "react";
import CustomizedTooltip from "../../UI/Tooltip/CustomizedTooltip";
import IconButton from "@material-ui/core/IconButton";
import logo from '../../../Icons/logo.png';
import './AppNavbar.scss';
const AppNavbar = () => {
  return (
    <div className="appNavbar__container">
      <div className="appNavbar__logo">
        <CustomizedTooltip
          title={`This Project is @copyright content of Sandeep Gupta(IITK).For More info contact +918429299481`}
        >
          <IconButton onClick={()=>window.location.reload()}>
            <img  src={logo} alt="sandeep" width="30px" className="appNavbar__logoImage" />
          </IconButton>
        </CustomizedTooltip>
      </div>
    </div>
  );
};

export default AppNavbar;
