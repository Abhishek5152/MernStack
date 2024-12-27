const GreetElement = ({name})=>{
    <h1>Greetings {name}!!</h1>
};
export const PropsDemo = ()=>{
    return ( 
        <div>
            <GreetElement name = "ABC"/>
        </div>
    );
};
