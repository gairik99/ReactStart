import { createContext, useContext, useState } from "react"


let initialstate = {
    count: 0,
}

let CountContext = createContext(initialstate);
// provider
let CountProvider = ({ children }) => {
    let [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}
// consumer
let useCount = () => useContext(CountContext);
export { useCount, CountProvider }






