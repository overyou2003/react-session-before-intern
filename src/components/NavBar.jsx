import reactLogo from "../assets/react.svg"

const navbar = () => {
    return (
        <header>
            <div className="flex mr-auto gap-x-2 font-semibold text-2xl">
                <img src={reactLogo} alt="react logo"/>
                React : Todo List
            </div>
        </header>
    )
} 

export default navbar