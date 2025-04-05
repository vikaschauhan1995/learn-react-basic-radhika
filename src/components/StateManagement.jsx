import { useState, useReducer } from "react";
import { initState, reducer } from "../reducers/mobileDetailReducer";

const setNewState = (payload) => {
    return {
        type: 'SET_NEW_STATE',
        payload
    }
}

const StateManagement = () => {
    const [state1, dispatch] = useReducer(reducer, initState);
    const [state, setState] = useState({
        name: '',
        ram: 0,
        storage: 0,
        brand: ''
    });
    const handleSubmit = () => {}
    const handleChange = (e) => {
        const value = e?.target?.value;
        const name = e?.target?.name;

        // setState(prevState => {
        //     return {
        //         ...state,
        //         [name]: value
        //     }
        // });

        dispatch(setNewState({name, value}));
    }
    console.log("state1=>", state1);
    return (
        <div className="container mt-5">
          <h3>Device Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={state1?.name}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="ram" className="form-label">RAM (GB)</label>
              <input
                type="number"
                className="form-control"
                id="ram"
                name="ram"
                value={state1.ram}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="storage" className="form-label">Storage (GB)</label>
              <input
                type="number"
                className="form-control"
                id="storage"
                name="storage"
                value={state1.storage}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="brand"
                value={state1.brand}
                onChange={handleChange}
                required
              />
            </div>
    
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    
} 

export default StateManagement;