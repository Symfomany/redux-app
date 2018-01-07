import activeUser from './active-user'
import users from './users'

describe('todos reducer', () => {

    it('should handle null state', () => {
        expect(
            activeUser(undefined, {})
        ).toEqual(null)
    })


    it('should handle initial state', () => {
        expect(
            activeUser(users(), {})
        ).toEqual(users())
    })

    it('should handle an one user selected', () => {
        expect(
            activeUser(users(), {
                type: 'USER_SELECTED',
                payload: {
                    id: 2,
                    name: "alphonse"
                }
            })
        ).toEqual({ "id": 2, "name": "alphonse" })
    })
})
