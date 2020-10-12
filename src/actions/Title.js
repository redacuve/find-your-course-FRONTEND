const CHANGE_TITLE = 'CHANGE_TITLE';

const setTitle = title => ({
  type: CHANGE_TITLE,
  payload: title,
});

export { CHANGE_TITLE, setTitle };
