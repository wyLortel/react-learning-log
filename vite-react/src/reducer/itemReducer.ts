export function itemReducer(state: Item, action: ReducerAction) {
  switch (action.type) {

    case "ADD_ITEM": {
      if (state.items.length >= 3) {
        return state;
      }

      const newItem = state.availableItems.filter(
        (item) => !state.items.includes(item)
      )[0];

      return {
        ...state,
        items: [...state.items, newItem],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.index),
      };

    default:
      return state;
  }
}

