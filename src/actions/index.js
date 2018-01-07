export const selectUser = (user) => {
    console.log("You click sur user: ", user.name);

    return {
        type: 'USER_SELECTED',
        payload: user
    }
};