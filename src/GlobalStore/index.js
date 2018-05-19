import React, { Component } from 'react';
import { reducer, initialState } from './reducer';
import { GlobalStoreContext } from './context';
class GlobalStore extends Component {
  state = initialState;

  dispatch = action => {
    this.setState(state => reducer(state, action));
  };

  render() {
    const { children } = this.props;
    return (
      <GlobalStoreContext.Provider
        value={{
          state: this.state,
          dispatch: this.dispatch
        }}
      >
        {children}
      </GlobalStoreContext.Provider>
    );
  }
}
export default GlobalStore;
