import { useReducer } from 'react'

const STATE_INICIAL = {
    resultado: ''
}

const Reducer = (state = STATE_INICIAL, action) => { // estado incial, acão a ser execultada
    console.log('Action execultada: ', JSON.stringify(action))
    switch (action.type) { 
        case 'SUBTRACAO':
        case 'SOMA':
            return { ...state, resultado: action.payload } // return type da acão e o resultado da ação

        default:
            return state
    }
}

const useStore = () => useReducer(Reducer, STATE_INICIAL) // controla ações

export default useStore