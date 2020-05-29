import {SET_NAME, SET_AGE} from '../constants';

export const setName = (name) => {
    return {     
      type: SET_NAME,
      text: name    
  }
}

export const setAge = (age) => {
  return {     
    type: SET_AGE,
    text: age    
}
}

