import  { useState, useEffect, createContext } from "react";

export const AuthContext = createContext<any>(null);

interface Props {
    children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [token, setToken] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [userName, setUserName] = useState<string>('Inicia sesión o regístrate');

    useEffect(() => {
        const storedToken = JSON.parse(localStorage.getItem('token') as string);
        const storedUserId = JSON.parse(localStorage.getItem('userId') as string);
        const storedUserName = JSON.parse(localStorage.getItem('userName') as string);
        setToken(storedToken);
        setUserId(storedUserId);
        setUserName(storedUserName);
        // localStorage.removeItem('token')
        // localStorage.removeItem('userId')
        // localStorage.removeItem('userName')
    }, [])

    return (
        <AuthContext.Provider value={{ token, setToken, userId, setUserId, userName, setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}