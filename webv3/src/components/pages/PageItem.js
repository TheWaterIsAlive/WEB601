import React from "react";
import { ContentArea } from "./ContentArea.js";
import { AddMenuItem } from "./parts/forms/addmenuItem";
import { Menuitem } from "./parts/menuitem";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { loggedIn: state.loggedIn };
};

// eslint-disable-next-line react/prop-types
const PageItem = ({ loggedIn }) => {
  return (
    <div>
      <ContentArea
        items={<Menuitem />}
        snapIn={
          <div>
            <AddMenuItem loginStatus={loggedIn} />
          </div>
        }
      />
    </div>
  );
};

const connectedPageItem = connect(mapStateToProps)(PageItem);

export default connectedPageItem;
