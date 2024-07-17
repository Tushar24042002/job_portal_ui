import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import styles from "./OtpScreen.module.css";
import CardComponent from "../../Component/CardComponent/CardComponent";
import Button from "../../Component/ButtonComponent/Button";
import { CONSTANTS } from "../../Consts";
import { verifyOTP } from "./OtpAction";
export default function OtpSecreen() {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    let obj = {
      email :"tushargg@yopmail.com",
      otp :otp
    }
    if (otp && otp.length > 5) {
      verifyOTP(obj).then((res) => {
        console.log(res);
      });
    }
  }, [otp]);

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mx-auto">
            <CardComponent>
              <div className={styles.otp_box}>
                <div className={styles.title}>Enter Your OTP</div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className={styles.btn_section}>
                <Button type={CONSTANTS.BUTTON.PRIMARY} value="Verify OTP" />

                <Button
                  type={CONSTANTS.BUTTON.OUTLINE_SECONDARY}
                  value="Send Otp"
                />
              </div>
            </CardComponent>
          </div>
        </div>
      </div>
    </section>
  );
}
