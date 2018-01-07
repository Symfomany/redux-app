export const selectUser = (user) => ({
    type: 'USER_SELECTED',
    payload: user
});

export const searchUser = (search) => ({
    type: 'USER_SEARCH',
    payload: search
});