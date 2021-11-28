import React from "react";
import { connect } from "react-redux";
import BootstrapAlert from "react-bootstrap/Alert";

const Alert = ({ alerts }) =>
    alerts !== null &&
        <BootstrapAlert key={alerts.id} variant={`${alerts.alertType}`}>
            {alerts.msg}
        </BootstrapAlert>


const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
