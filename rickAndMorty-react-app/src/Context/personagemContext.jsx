import { createContext, useState } from "react";

export const PersonagemContext = createContext();

export const PersonagemProvider = ({ children }) => {
    const [personagem, setPersonagem] = useState(null)
    return (
        <PersonagemContext.Provider value={{ personagem, setPersonagem }}>{children}</PersonagemContext.Provider>
    )
}