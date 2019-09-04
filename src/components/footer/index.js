import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = props => (
  <p>
    vc tem {props.count} {props.loading && <span>(Carregando...)</span>} repos
  </p>
);

const mapStateToProps = state => ({
  count: state.favorites.data.length,
  loading: state.favorites.loading
});

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Footer);
