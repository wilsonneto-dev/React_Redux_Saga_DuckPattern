import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = props => {
  console.log(props);
  return (
    <p>
      vc tem {props.count} {props.loading && <span>(Carregando...)</span>}{' '}
      repos.
      <span>{props.error}</span>
    </p>
  );
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
  loading: state.favorites.loading,
  error: state.favorites.error
});

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.string])
};

export default connect(mapStateToProps)(Footer);
