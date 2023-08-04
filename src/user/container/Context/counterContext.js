import { useState, createContext } from 'react';

const counterContext = createContext();

export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);

    //Increase counter
    const increment = () => {
        return setCounter(counter + 1);
    }

    //Decrease counter
    const decrement = () => {
        if (counter > 0) {
            return setCounter(counter - 1);
        }
    }

    return (
        <counterContext.Provider value={{ counter, increment, decrement }}>
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;