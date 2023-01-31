import { skipPartiallyEmittedExpressions } from "typescript"
import styles from "../styles/apt/apt.module.css"
import { Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useState } from 'react'
import { description } from "@/constants/types";

interface props {
    code: string
    description: description
}

export default function Results(props: props) {
    const [active, setActive] = useState('Home');

    const pythonTutorLink = (): string => {
        const code = props.code
        return `https://pythontutor.com/python-debugger.html#code=${encodeURIComponent(code)}&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false`
    }

    return (
        <div className={styles.resultsMain}>
            <iframe src={pythonTutorLink()} width="100%" height="1000px" style={{
                border: 'none', transform: "scale(0.75)",
                transformOrigin: "top left"
            }} ></iframe>
        </div >
    )
}
