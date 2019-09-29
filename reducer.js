import {initState} from './initState';
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ON_SWITCHES' :
      return {
        ...state,
        PriceMapSwitches: {
          ...state.PriceMapSwitches, FXE: action.value
        }
      }
      case 'OFF_SWITCHES' :
      return {
        ...state,
        PriceMapSwitches: {
          ...state.PriceMapSwitches, FXE: action.value
        }
      }
      default: return state;
  }
}
export {reducer};