import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/home/Home.module.css';
import { Panel, Placeholder, Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern APT</title>
        <meta name="description" content="A modern interface for APTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Background}>
        

      <div className={styles.Header}>

        <div className={styles.Title}>
          <h2 style={{fontWeight:600}}>CS 101: Spring 2023</h2>
          <h3 style={{ marginTop: "-15px"}}>This is a webpage for checking and grading your APTs</h3>
        </div>

        <h3>My Grades</h3>
        <h3>How Do APTs Work?</h3>
        <h3>Get Help</h3>

      </div>

      <div className={styles.APTGroup}>

            <Panel style={{fontWeight:600, borderColor:"var(--blue)", borderWidth:"2px"}} header={
              <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{display: "flex", backgroundColor:"var(--blue)", width:"30px", margin:"-20px"}}></div>
                <div style={{display:"flex", flexDirection:"column", marginLeft:"25px", width:"100%"}}>
                  <h2 style={{marginLeft:"10px"}}>APT 0</h2>
                  <h3 style={{marginLeft:"10px", marginTop:"-15px"}}>
                    Due: 05/12/2000   |   Complete all 6
                  </h3>
                  <Progress.Line percent={80} showInfo={false} strokeColor= "var(--blue)" />
                </div>
              </div>

            } collapsible bordered>


              <h2>Due: 05/12/2000   |   Complete all 6</h2>
             
              <Placeholder.Paragraph />
            </Panel>

            

      </div>


            
      </div>
      

      
    </>
  )
}
