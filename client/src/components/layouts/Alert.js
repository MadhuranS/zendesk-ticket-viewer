import React from "react";
import { connect } from "react-redux";
import BootstrapAlert from "react-bootstrap/Alert";

//component to display alert status depending on alert state
export const Alert = ({ alerts }) =>
    alerts !== null &&
        <BootstrapAlert data-test="Alert" key={alerts.id} variant={`${alerts.alertType}`}>
            {alerts.msg}
        </BootstrapAlert>


const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
