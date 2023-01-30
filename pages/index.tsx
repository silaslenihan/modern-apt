import Head from 'next/head';
import styles from '../styles/home/Home.module.css';
import { Panel, Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import assignments from "../mock_data/assignments.js";
import Link from 'next/link';

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
          <div className={styles.Large}>CS 101: Spring 2023</div>
          <div className={styles.Small} style={{ marginTop: "-5px"}}>This is a webpage for <em>checking</em> and <em>grading</em> your APTs.</div>
        </div>

        <h3 className={styles.Medium}>My Grades</h3>
        <h3 className={styles.Medium}>How Do APTs Work?</h3>
        <h3 className={styles.Medium}>Get Help</h3>

      </div>

      <div className={styles.APTGroup}>

      
      

        {assignments.sort((a,b) => Date.parse(a.due) - Date.parse(b.due)).map((assignment) => (
            
        

            <Panel style={{marginBottom:"20px",fontWeight:700, borderColor:"var(--blue)", borderWidth:"2px"}} header={
              <div style={{display:"flex", flexDirection:"row"}}>
                <div className={styles.BlueTab}></div>
                <div style={{display:"flex", flexDirection:"column", marginLeft:"25px", width:"100%"}}>
                  <div className={styles.Medium} style={{marginLeft:"10px"}}>{assignment.name}</div>
                  <div className={styles.Small} style={{marginLeft:"10px", marginTop:"5px"}}>
                    {assignment.due} {assignment.info}
                  </div>
                  <Progress.Line style={{marginTop:"5px"}} percent={80} showInfo={false} strokeColor= "var(--blue)" />
                </div>
              </div>

            } collapsible bordered>
              <div style={{display:"flex", flexDirection:"row"}}>
                <div className={styles.BlueTab}></div>
                <div style={{display:"flex",flexDirection:"column", marginLeft:"35px", width:"100%"}}>
                
                {assignment.apts.map((apt) => (
                  <Link style={{textDecoration: 'none'}} href={`/apt?id=${assignment.id}`}>
                  <Panel className={styles.APT} header={
                    <div style={{marginTop:"-20px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                   

                   <div style={{display:"flex", flexDirection:"row"}}>
                   <Progress.Circle strokeWidth={12} strokeColor={"var(--red)"}  style={{width:20, marginLeft:"-5px"}} percent={30} showInfo={false} />
                      
                      <div className={styles.Small} style={{marginLeft:"15px", fontWeight:"700"}}>
                        {apt.name} | Description
                      </div>
                      </div>


                      <div className={styles.EndTab} style={{backgroundColor:"var(--red)" }}>
                        <div className={styles.Small} style={{color:"white", fontWeight:"700"}}>20 / 300</div>
                      </div>
              
                      </div>
                  } bordered>
              
                 </Panel>
                 </Link>
                 ))}

                </div>
              </div>
            </Panel>
            ))}

            

      </div>


            
      </div>
      

      
    </>
  )
}
