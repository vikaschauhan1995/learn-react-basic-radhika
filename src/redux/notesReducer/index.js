export const initState = {
    notes: [
        {id: 989, detail: "first note"}
    ],
}

export const reducer = (state = initState, action) => {
    switch(action?.type) {
        default:
            return state;
    }
}