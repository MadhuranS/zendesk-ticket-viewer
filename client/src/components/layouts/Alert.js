import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BootstrapAlert from "react-bootstrap/Alert";

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
        <BootstrapAlert key={alert.id} variant={`${alert.alertType}`}>
            {alert.msg}
        </BootstrapAlert>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
