const Content = () => {
    const handleNameChange = () => {
        const names = ["naren", "darshan", "sachin", "anirudh"];
        const i = Math.floor(Math.random() * 4);
        return names[i];
    }
    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content