import * as actions from './index'

describe('user actions', () => {

    it('user selected', () => {

        const user = { name: "Joe", id: 1 };

        expect(actions.selectUser(user)).toEqual({
            type: 'USER_SELECTED',
            payload: user
        })
    })


})
