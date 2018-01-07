import users from './users'

describe('users reducer', () => {

    it('should handle initial state', () => {
        expect(
            users().length
        ).toBe(3)
    })

})
