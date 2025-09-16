import { useContext, createContext, useEffect, useState } from 'react'

// tạo context
const ThemeContext = createContext();

// provider bọc toàn app
export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("pf:theme");
        return saved ? saved === "dark" : false;
    });

    //lưu giá trị sau mỗi lần thay đổi state dark
    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("pf:theme", dark ? "dark" : "light");
    }, [dark])

    //toggletheme để click đảo state
    const toggleTheme = () => setDark(d => !d);

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook
export function useTheme(){
    return useContext(ThemeContext);
}
