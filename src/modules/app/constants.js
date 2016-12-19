//we are using namespaceing to prevent modules action type collision 
//every module shoule have a unique name. the best practice is to set name
//base on modules name

//name of this modules
export const NAME = 'app'

//action types
export const INCREMENT = `${NAME}/INCREMENT`
export const DECREMENT = `${NAME}/DECREMENT`
export const ADD_NEW_COUNTER = `${NAME}/NEW`

//as you can set above, each action is namespaced with modules name.