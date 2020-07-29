export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (item) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: ADD_ITEM,
    payload: {
      id: getId(),
      ...item,
    },
  };
};

export const removeItem = (id, type) => ({
  type: REMOVE_ITEM,
  payload: {
    id,
    type,
  },
});
