import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Footer = props => (
  <p>
    vc tem {props.count} {props.loading && <span>(Carregando...)</span>} repos.
    {!!props.error && <span>{props.error}</span>}
  </p>
);

const mapStateToProps = state => ({
  count: state.favorites.data.length,
  loading: state.favorites.loading,
  error: state.error
});

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(null, PropTypes.string.isRequired)
};

export default connect(mapStateToProps)(Footer);
