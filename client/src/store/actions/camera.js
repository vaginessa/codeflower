export const types = {
  UPDATE_CAMERA: 'camera/UPDATE_CAMERA',
}

export const updateCamera = (updates) => ({
  type: types.UPDATE_CAMERA,
  data: updates,
})

const initialState = {
  cameraOn: false,
  transparent: false,
  aspectRatio: null,
  aperture: null,
  showAperture: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CAMERA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default reducer
