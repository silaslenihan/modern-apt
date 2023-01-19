import type { NextPage } from "next"
import styles from "../styles/apt/apt.module.css"
import Editor from "@monaco-editor/react";


const APT: NextPage = () => {
    return (
        <div className={styles.aptMain}>
            <div className={styles.problemStatement}>
                <h1>Example Problem</h1>
                <p>example description blah blah</p>
                <h2>Contraints</h2>
                <div>
                    <ul>
                        <li>constraint 1</li>
                        <li>constraint 2</li>
                        <li>constraint 3</li>

                    </ul>
                </div>
                <h2>Examples</h2>
                <div>
                    <ul>
                        <li>example 1</li>
                        <li>example 2</li>
                        <li>example 3</li>

                    </ul>
                </div>

            </div>
            <div className={styles.solutionArea}>
                <Editor
                    height="90vh"
                    defaultLanguage="python"
                    defaultValue="// some comment"
                    theme="vs-dark"
                // onChange={handleEditorChange}
                />
            </div>
        </div>
    )
}

export default APT


