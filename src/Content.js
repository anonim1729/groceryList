import { useState } from 'react';


const Content = () => {
    const [name, setName] = useState('Narendra')
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
        const names = ["naren", "darshan", "sachin", "anirudh"];
        const i = Math.floor(Math.random() * 4);
        setName(names[i]);
    }

    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log({ count });
    }
    const handleClick2 = () => {
        console.log(count);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>change Name</button>
            <button onClick={() => handleClick()}>click here</button>
            <button onClick={() => handleClick2()}>Event</button>
        </main>
    )
}

export default Content
