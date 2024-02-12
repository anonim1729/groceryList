const Content = () => {
    const handleNameChange = () => {
        const names = ["naren", "darshan", "sachin", "anirudh"];
        const i = Math.floor(Math.random() * 4);
        return names[i];
    }

    const handleClick = () => {
        console.log("You have clicked me!");
    }
    const handleClick2 = (name) => {
        console.log(`${name} has clicked the button`);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick()}>Click me</button>
            <button onClick={() => handleClick2('Naren')}>click here</button>
            <button onClick={(e) => { handleClick3(e) }}>Event</button>
        </main>
    )
}

export default Content
