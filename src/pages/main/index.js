import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

class Main extends Component {
  constructor() {
    super();
    this.state = { repositoryInput: '' };
  }

  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, text: PropTypes.string })
      )
    }).isRequired
  };

  handleAddRepository = e => {
    e.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="user/repo"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>{favorite.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
