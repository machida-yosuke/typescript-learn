type State = {
  count: number
  unit: string
}

export const initialState : State = {
  count:0,
  unit:'pt'
}

export function reducer(state:State, action:any):State{
  switch (action.type){
   case 'increment':
    return {...state, count:state.count +1}
   case 'decrement':
    return {...state, count:state.count -1}
    default:
      throw new Error()
  }
}


