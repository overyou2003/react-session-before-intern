

const navbar = () => {
    const title = "hello world";
    const check = true;
    return (
        <div>
        
            {check ? <h1>Show must go on</h1> : <h1>Show is off</h1>}
        </div>
    )
}

export default navbar