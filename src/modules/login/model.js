import Mirror from '../../mirrorn'

export default Mirror.model({
  name: 'user',
  initialState: {
    userInfo: {},
    userId: undefined
  },
  reducers: {
    set (state, data) {
      return {
        ...state,
        userInfo: data,
        userId: data.id || state.userId
      }
    }
  }
})
