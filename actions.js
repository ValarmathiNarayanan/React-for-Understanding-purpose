const OffSwitches = (dispatch) =>{
  dispatch({type:'OFF_SWITCHES', values:false});
}
const OnSwitches = (dispatch) =>{
  dispatch({type:'ON_SWITCHES', values:true});
}

export {OffSwitches,OnSwitches};