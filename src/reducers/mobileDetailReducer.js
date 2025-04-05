


export const initState = {
    name: '',
    brand: '',
    ram: 0,
    storage: 0
}

export const reducer = (state, action) => {
    switch(action?.type) {
        case 'SET_NAME':
            return { ...state, name: action?.payload };
        case 'SET_NEW_STATE':
            return { ...state, [action?.payload?.name]: action?.payload?.value };
        default:
            return state;
    }
}


