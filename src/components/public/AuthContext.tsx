import  { useState, useEffect, createContext } from "react";

export const AuthContext = createContext<any>(null);

interface Props {
    children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [token, setToken] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token') as string;
        const storedUserId = localStorage.getItem('userId') as string;
        const storedUserName = localStorage.getItem('userName') as string;
        setToken(storedToken);
        setUserId(storedUserId);
        setUserName(storedUserName);
    }, [])

    return (
        <AuthContext.Provider value={{ token, setToken, userId, setUserId, userName, setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}