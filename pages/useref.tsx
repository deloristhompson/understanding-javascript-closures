import { useRef, useState, useEffect } from "react"
import styles from "../styles/Home.module.css"

export default function UseRef() {
  const [subjectLine, setSubjectLine] = useState("");
  const currentSubjectLine = useRef(subjectLine);
  currentSubjectLine.current = subjectLine;


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectLine(e.currentTarget.value);
  }

  useEffect(() => {

    setTimeout(() => {
      console.log("First Run: ", currentSubjectLine.current);
      if (subjectLine === currentSubjectLine.current) {
        console.log(subjectLine === currentSubjectLine.current);
      }
    })

    console.log("Second Run: ", currentSubjectLine.current);
    
  }, [subjectLine])
  return (
    <div>
      <main className={styles.main}>
      <h6 className={styles.title}>
          useRef Subject Line
        </h6>
      <input type="text" onChange={handleOnChange} />
        </main>

    </div>
  )
}