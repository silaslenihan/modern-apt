import Head from 'next/head';
import styles from '../styles/home/Home.module.css';
import { Panel, Progress, Modal, Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import assignments from "../mock_data/assignments.js";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const description = "Description";
  const date = new Date();

  const modalStyles = {
    radioGroupLabel: {
      padding: '8px 12px',
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

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
        <h3 className={styles.Medium} onClick={handleOpen}>How Do APTs Work?</h3>
        <h3 className={styles.Medium}>Get Help</h3>
      </div>


      <div className={styles.APTGroup}>
        {assignments.sort((a,b) => Date.parse(a.due) - Date.parse(b.due)).map((assignment) => (
            <Panel style={{marginBottom:"20px",fontWeight:700, backgroundColor: assignment.progress == 100 ? ("var(--light-green)") :  ( date > new Date(assignment.due) ? ("var(--light-red)") : ("white") ) , borderColor: assignment.progress == 100 ? ("var(--green)") :  ( date > new Date(assignment.due) ? ("var(--red)") : ("var(--blue)") ) , borderWidth: "2px"}} header={
              <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{backgroundColor: assignment.progress == 100 ? ("var(--green)") :  ( date > new Date(assignment.due) ? ("var(--red") : ("var(--blue)") ) }} className={styles.BlueTab}></div>
                <div style={{display:"flex", flexDirection:"column", marginLeft:"25px", width:"100%"}}>
                  <div className={styles.Medium} style={{marginLeft:"10px"}}>{assignment.name}</div>
                  <div className={styles.Small} style={{marginLeft:"10px", marginTop:"5px"}}>
                    {assignment.due} {assignment.info}
                  </div>
                  <Progress.Line style={{marginTop:"5px"}} percent={assignment.progress} showInfo={false} strokeColor= {assignment.progress == 100 ? ("var(--green)") :  ( date > new Date(assignment.due) ? ("var(--red") : ("var(--blue)") )  }/>
                </div>
              </div>
            } collapsible bordered>


              <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{backgroundColor: assignment.progress == 100 ? ("var(--green)") :  ( date > new Date(assignment.due) ? ("var(--red") : ("var(--blue)") ) }} className={styles.BlueTab}></div>
                <div style={{display:"flex",flexDirection:"column", marginLeft:"35px", width:"100%"}}>    
                  {assignment.apts.map((apt) => (
                    <Link style={{textDecoration: 'none'}} href={`/apt?id=${assignment.id}`}>
                    <Panel className={styles.APT} style={{borderColor: assignment.progress == 100 ? ("var(--green)") :  ( date > new Date(assignment.due) ? ("var(--red") : ("var(--blue)") ) }} header={
                      <div style={{marginTop:"-20px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                          <Progress.Circle strokeWidth={12} strokeColor={ apt.tests == 100 ? ("var(--green"): "var(--red)"}  style={{width:20, marginLeft:"-5px"}} percent={apt.tests} showInfo={false} />
                          <div className={styles.Small} style={{marginLeft:"15px", fontWeight:"700", display:"flex", flexDirection:"row"}}>
                          <div>{apt.name}</div>
                          <div>{description ? (
                              <div style={{display:"flex", flexDirection:"row"}}>
                              <div className={styles.Small} style={{marginLeft:"10px", marginRight:"10px", color:"var(--gray)"}}> | </div>
                              <div className={styles.Small}>{description}</div>
                          </div> ) : (<div></div>)} </div>
                          </div>
                        </div>
                        <div className={styles.EndTab} style={{backgroundColor: apt.tests == 100 ? ("var(--green"): "var(--red)" }}>
                          <div className={styles.Small} style={{color:"white", fontWeight:"700"}}>{apt.tests}%</div>
                        </div>
                      </div>
                    } bordered> </Panel>
                  </Link>
                  ))}
                </div>
              </div>
            </Panel>
        ))}


        <Modal backdrop={true} keyboard={true} open={open} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>How Do APTs Work?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div style={{color:"var(--black)"}} className={styles.Small}>Here we will provide insight into what is happening on the server side.</div>
            
            <Carousel
              key={`${"bottom"}.${"dot"}`}
              placement={"bottom"}
              shape={"dot"}
              className="custom-slider"
            >
              <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
              <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
              <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
              <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
              <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
            </Carousel>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>

            

      </div>   
      </div>
      <>
    </>
    </>
  )
}
