import { createContext, useReducer } from "react";
import { ThemeReducer } from "./reducer/theme.reducer";
import { TOGGLE_THEME } from "./Actiontypes";

export const ThemeContext = createContext();

const initialval = {
    thme: "light"
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialval);

    const togletheme = (theme) => {
        const newtheme = theme === 'light' ? 'dark' : 'light';

        dispatch({ type: TOGGLE_THEME, payload: newtheme })
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                togletheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}