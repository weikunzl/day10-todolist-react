export const initialState = [
    {id: 1, text: "This is the first thing I need to do", done: false},
    {id: 2, text: "This is the second thing I need to do", done: false},
    {id: 3, text: "I already done this item", done: true},
];

// reducer is a pure function that define and gather all state update logic
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'DONE':
            return state.map(todo => {
                if (action.id === todo.id) {
                    const done = !todo.done;
                    return {...todo, done: done}
                }
                return todo;
            });
        case 'ADD':
            return [...state, action.todo];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'LOAD_TODOS':
            return action.todos
        default:
            return state;
    }
};
