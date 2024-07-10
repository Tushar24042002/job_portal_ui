import React from "react";
import styles from "./LoginModal.module.css";
import Modal from "../ModalComponent/Modal";
import Button from "../ButtonComponent/Button";
import { CONSTANTS } from "../../Consts";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LoginModal = ({ setIsShow, route}) => {
  const navigate = useNavigate();

const loginFunction=()=>{
localStorage.setItem("prev_route", route);
navigate("/login");
}

  return (
    <Modal show={true}>
      <div className={styles.login_modal}>
        <h2>Please Login To Proceed Now</h2>
        <div className={styles.btn_section}>
          <Button
            type={CONSTANTS.BUTTON.PRIMARY}
            value="Login Now"
            onClick={() => loginFunction()}
          />

          <Button
            type={CONSTANTS.BUTTON.OUTLINE_SECONDARY}
            value="Close"
            onClick={() => setIsShow()}
          />
        </div>
      </div>
    </Modal>
  );
};

LoginModal.propTypes = {
  setIsShow: PropTypes.arrayOf(PropTypes.object).isRequired,
  route: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default LoginModal;
