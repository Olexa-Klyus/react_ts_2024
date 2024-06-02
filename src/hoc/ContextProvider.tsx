import React, {createContext, FC, ReactHTML, ReactNode} from 'react';

const Context = createContext('');

interface IProps{
    children:ReactNode
}
const ContextProvider:FC<IProps> = ({children}) => {
    return (
        <div>
            <Context.Provider value={'ContextProvider'}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
}