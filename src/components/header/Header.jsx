import React from "react";

import Dog from "../../assets/dog";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-evenly align-items-center">
        <Dog />
        <h1 className="display-4">TASK TRACKER</h1>
      </div>
    </div>
  );
};

export default Header;
