import React from "react";
import { ContentArea } from "../ContentArea/ContentArea";
import { AddMenuItem } from "../components/addmenuItem/addmenuItem";
import { Menuitem } from "../components/menuItem/menuitem";
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
