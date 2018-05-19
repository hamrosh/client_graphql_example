export const initialState = {
  state: {
    themeName: 'ffgdgdgg'
  }
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        themeName: state.themeName === 'dark' ? 'light' : 'dark'
      };
    }
  }
};
