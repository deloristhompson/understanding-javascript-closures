import React, {useState, useEffect} from "react";
import styles from "../styles/Home.module.css"

export default function UseState() {
  const [subjectLine, setSubjectLine] = useState("");
  const [currentSubjectLine, setCurrentSubjectLine] = useState(subjectLine);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectLine(e.currentTarget.value);
  }

  useEffect(() => {
    setCurrentSubjectLine(subjectLine);

    const saveUpdatedSubjectLine = (subject: string) => {
      setTimeout(() => {
        console.log("currentSubjectLineFirst Run: ", currentSubjectLine);
        if (subject === currentSubjectLine) {
          console.log(subject === currentSubjectLine);
        }
      }, 2000);

    }

    console.log("currentSubjectLine Second Run: ", currentSubjectLine);
    saveUpdatedSubjectLine(subjectLine || "")
  }, [subjectLine, currentSubjectLine])
  return (
    <div>
      <main className={styles.main}>
      <h6 className={styles.title}>
          useState Subject Line
        </h6>
      <input type="text" onChange={handleOnChange} />
      </main>
    </div>
  )
}