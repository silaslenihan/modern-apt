import type { NextPage } from "next"
import styles from "../styles/apt/apt.module.css"
import Editor from "@monaco-editor/react";
import Head from "next/head"
import { useRouter } from "next/router"
import descriptions from "../mock_data/apt_descriptions.js"
import HtmlParser from 'react-html-parser'
import { useEffect, useState } from 'react'
import { description } from "@/constants/types";
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Link from "next/link";

const APT: NextPage = () => {
    const router = useRouter()
    const problemId = +(router.query.id || 0)

    const [description, setDescription] = useState<description>()
    const [code, setCode] = useState("")

    useEffect(() => { setDescription(descriptions[problemId]) }, [problemId])

    function handleEditorChange(value: string | undefined) {
        setCode(value || "")
    }

    return (
        <div>
            {
                description ? (
                    <div className={styles.aptMain} >
                        <Head>
                            <title>APT: {description.name}</title>
                            <meta name="description" content="A fun and challeging Computer Science problem." />
                        </Head>
                        <div className={styles.problemStatement}>
                            <div className={styles.problemDescription}>
                                <div className={styles.problemHeader}>

                                    {description.name}
                                </div>
                                <div style={{ padding: "20px" }}>
                                    {HtmlParser(description.problem)}
                                </div>
                            </div>
                            <div className={styles.contentBox}>
                                <b style={{ fontSize: "30px" }}>Contraints</b>
                                {HtmlParser(description.constraints)}
                            </div>
                            <div className={styles.contentBox}>
                                <b style={{ fontSize: "30px" }}>Examples</b>
                                {HtmlParser(description.examples)}
                            </div>

                        </div>
                        <div className={styles.solutionArea}>
                            <div className={styles.submissionBox}>
                                <div style={{ height: "50px", padding: "10px", marginLeft: "20px" }}>
                                    <Button color="green" appearance="primary">
                                        Submit
                                    </Button>
                                </div>
                                <Editor
                                    height="80vh"
                                    defaultLanguage="python"
                                    defaultValue={description.initial}
                                    value={code}
                                    theme="vs-dark"
                                    onChange={handleEditorChange}
                                />
                            </div>
                        </div>
                    </div>) : (<div></div>)
            }
        </div >

    )
}

export default APT


