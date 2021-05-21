import React, { useReducer, createContext } from "react";

// Create Context Object
export const ElevContext = createContext();

const initState = {
    elev:
        {
            id: 0,
            floor: 0,
        },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload],
            };
        case "DONE_TODO":
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            throw new Error();
    }
};
// Create a provider for components to consume and subscribe to changes
export const TodoContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <TodoContext.Provider value={[state, dispatch]}>{props.children}</TodoContext.Provider>;
};