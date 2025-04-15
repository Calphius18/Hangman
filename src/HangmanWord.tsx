export function HangmanWord() {
    const word = "test"
    return <div style = {{
        display: "flex",
        gap: "0.25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {word.split("").map((letter, index) => (
            <span style = {{
                borderBottom: "0.1em solid black"
            }}>{letter}</span>
            
        ))}
    </div>
}