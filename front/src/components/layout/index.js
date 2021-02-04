import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Footer from "../footer";
import Nav from "../nav";
import * as actions from "../../pages/home/store/actions";

const Layout = (props) => {
  const { isAuthFormOpened, handleAuthFormToggle } = props;
  const [authFormVisible, setAuthFormVisible] = useState(isAuthFormOpened);

  useEffect(() => {
    setAuthFormVisible(isAuthFormOpened);
  }, [isAuthFormOpened]);

  const authFormToggleHandler = () => {
    setAuthFormVisible(!authFormVisible);
    handleAuthFormToggle(!authFormVisible);
  };

  return (
    <div>
      <Nav
        isAuthFormOpened={authFormVisible}
        handleAuthFormToggle={authFormToggleHandler}
      />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthFormOpened: state.home.isAuthFormOpened,
});

const mapDispatchToProps = (dispatch) => ({
  handleAuthFormToggle: (authFormVisible) =>
    dispatch(actions.setAuthFormOpen(authFormVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
