import styles from "./Keyboard.module.css"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled? : boolean
  activeLetter : string[]
  inactiveLetter : string[]
  addGuessedLetter : (letter :string) => void
}

export function Keyboard({ 
  disabled = false,
  activeLetter, 
  inactiveLetter, 
  addGuessedLetter
} : KeyboardProps) {
   return <div style={{ display : "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))", gap: "0.5rem" }}>
    
    {KEYS.map(key => {
      const isActive = activeLetter.includes(key)
      const isInactive = inactiveLetter.includes(key)

      return (<button 
        onClick= {() => addGuessedLetter(key)} 
        className= {`${styles.btn} 
        ${isActive ? styles.active : ""} 
        ${isInactive ? styles.inactive : ""}`}
        disabled = {isInactive || isActive || disabled}
        key = {key}>
          {key}
        </button>)
    })}

   </div> 
}