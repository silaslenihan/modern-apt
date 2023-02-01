import { skipPartiallyEmittedExpressions } from "typescript"
import styles from "../styles/apt/apt.module.css"
import { Nav, Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useEffect, useState } from 'react'
import Image from "next/image";
import { description } from "@/constants/types";
import results from "../mock_data/test_results"

interface props {
    code: string
    description: description
    tab: number
    setTab: (newTab: number) => void;

}

export default function Results(props: props) {
    const pythonTutorLink = (): string => {
        const code = props.code + "\n\n\nfalling(3 ,5)"
        return `https://pythontutor.com/python-debugger.html#code=${encodeURIComponent(code)}&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false`
    }
    const active = props.tab

    return (

        <div className={styles.resultsMain}>

            <Nav appearance="tabs" style={{ fontWeight: "700" }}>
                <Nav.Item active={active == 0} onClick={() => { props.setTab(0) }}>Visualizer</Nav.Item>
                <Nav.Item active={active == 1} onClick={() => { props.setTab(1) }}>Console</Nav.Item>
                <Nav.Item active={active == 2} onClick={() => { props.setTab(2) }}>Results</Nav.Item>
            </Nav>
            <div>
                {active == 0 ? (
                    <div style={{ height: "800px" }}>
                        <iframe src={pythonTutorLink()} width="100%" height="100%" style={{
                            border: 'none',
                            transformOrigin: "top left"
                        }} ></iframe>
                    </div>) : (<div>
                        {active == 1 ? (
                            <div style={{ padding: "25px", marginTop: "10px" }}>
                                <p>Input</p>
                                <p style={{ padding: "5px", backgroundColor: "rgb(203 213 225", borderRadius: "5px" }}>time=<code>3</code></p>
                                <p style={{ padding: "5px", backgroundColor: "rgb(203 213 225", borderRadius: "5px" }}>velo=<code>5</code></p>
                                <p style={{ marginTop: "20px" }}>Output</p>
                                <p style={{ padding: "5px", backgroundColor: "rgb(203 213 225", borderRadius: "5px" }}><code>51.2</code></p>
                                <p style={{ marginTop: "20px" }}>Expected</p>
                                <p style={{ padding: "5px", backgroundColor: "rgb(203 213 225", borderRadius: "5px" }}><code>59.1</code></p>
                                <p style={{ marginTop: "20px" }}>Stdout</p>
                                <div style={{ padding: "5px", backgroundColor: "rgb(203 213 225", borderRadius: "5px", display: "flex", flexDirection: "column" }}>
                                    <code>test1</code>
                                    <code>wrong</code>
                                    <code>test2</code>
                                    <code>found result!</code>
                                </div>


                            </div>) : (
                            <div className={styles.submissionResult}>
                                <h1 style={{ textAlign: "center", fontSize: "40px" }}>Submission Result: {(3 / 7 * 100).toFixed(2) + '%'}</h1>
                                <Progress.Line percent={(3 / 7 * 100)} showInfo={false} strokeColor={"var(--green)"} />

                                {results.tests.map((result) => (
                                    (<div className={styles.resultTest} style={{ border: `3px solid var(${result.pass ? "--green" : "--red"})` }}>
                                        <p>
                                            Expected: <code>{result.expected}</code>
                                            <br></br>
                                            Actual: <code>{result.actual}</code>
                                        </p>

                                        {/* <code>actual: {result.actual}</code> */}
                                        <p style={{ marginTop: "10px" }}>Input:<code>{result.input}</code></p>

                                    </div>)
                                ))}
                            </div>)}
                    </div>)}
            </div>

            <br />
        </div >


    );
}
