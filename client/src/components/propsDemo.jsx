const greetElement = ({name})=>{
    <h1>Greetings {name}!!</h1>
};
export const PropsDemo = ()=>{
    return ( 
        <div>
            <greetElement name = "ABC"/>
        </div>
    );
};
