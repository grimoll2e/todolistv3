import { createContext } from "react" ;

// createContext => context Obj (name)ใชช้ได้ 2 ที
// #1 provider : wrapper component => shared data,logic
// #2 comsumer : component ที่ต้องการใช้ data,logic (subscribe component)
export const TodoContext = createContext()






// #1 provider : wrapper component => shared data,logic
function TodoContextProvider(props){

    const sharedObj={magic:42}


    return (
        <TodoContext.Provider value={sharedObj}>
            {props.chidren}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider