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
import Results from "@/components/Results";
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine';
import PlayIcon from '@rsuite/icons/legacy/Play';


const APT: NextPage = () => {
    const router = useRouter()
    const problemId = +(router.query.id || 0)
    const [tab, setTab] = useState(0)

    const [description, setDescription] = useState<description>()
    const [code, setCode] = useState("")

    useEffect(() => {
        setDescription(descriptions[problemId])
        setCode(descriptions[problemId].initial)
    }, [problemId])

    function handleEditorChange(value: string | undefined) {
        setCode(value || "")
    }

    const scrollToComponent = () => {
        const element = document.getElementById("scroll-to-element");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                                    <Link className={styles.backArrow} href="/">
                                        <ArrowLeftLineIcon></ArrowLeftLineIcon>
                                    </Link>
                                    <h1 className={styles.problemTitle}>{description.name}</h1>
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
                                    <button className={styles.playButton} onClick={() => {
                                        setTab(1)
                                        scrollToComponent()
                                    }}>
                                        <PlayIcon></PlayIcon>
                                    </button>

                                    <button className={styles.submitButton} onClick={() => {
                                        setTab(2)
                                        scrollToComponent()
                                    }}>
                                        SUBMIT
                                    </button>
                                </div>
                                <Editor
                                    height="65vh"
                                    defaultLanguage="python"
                                    value={code}
                                    theme="vs-dark"
                                    onChange={handleEditorChange}
                                />
                            </div>
                            <div id="scroll-to-element">
                                <Results
                                    code={code}
                                    description={description}
                                    tab={tab}
                                    setTab={setTab}
                                />
                            </div>

                        </div>
                    </div>) : (<div></div>)
            }
        </div >

    )
}

export default APT


