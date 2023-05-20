
import image from "../assets/bulb.jpg";
import "../App.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Home(){
    const [email, setEmail]= useState()
    const [feedback, setFeedback]= useState()
    const api= "https://backend.textprocessor.live"
    const navigate= useNavigate()
    const send= ()=>{
       // setSpinner(true)
          axios.post(api+"/send", {
              email: email,
              feedback: feedback
          }).then((res)=>{
              if (res.status==200){
                 alert("feedback sent")
                  //setSpinner(false)
              }else{
                  alert("Internal server error")
                 // setSpinner(false)
              }
            
          })
      }

      const handleEmail=(e)=>{
        setEmail(e.target.value)
      }
      const handleFeedback=(e)=>{
        setFeedback(e.target.value)
      }
    return (
        <><div className="container">
            <div className='c'>
                <img className="img" src={image} />
                <div className="top-left">
                    <h2>Welcome to TextProcessor</h2>
                    <h4>You can now start summarizing, paraphrazing, and generating text</h4>
                    <center><button className="button" onClick={()=>{navigate("/summarize")}}>Start</button></center>
                </div>
            </div>
        </div><br /><div className='container color3'>
                <br />
                <div className='row'>
                    <div className='column'>
                        <h4>Overview</h4>
                        <p>The application allows the user to generate text usign the famous GPT2 model that is built for the purpose of Causal Text Generation. The model can be modified, based on various text formats, to create a text layout based on the text input format. Note - that the model does not contain a text to input, which means you will not get the full text text that is provided. 
</p>                    </div>
                    <div className='column'>
                        <h4>Generate</h4>
                        <p>The text you submit to us will be published as a PDF and may yet remain private with any publishers we have in partnership. This PDF will contain all the relevant data required in order to create the font on our marketplaces. In order to enable this function, we will utilize third party services in order to protect your rights, and we encourage you to use these service provider providers if possible. As well as being able to send out any email, text or request for help if you encounter any of the above scenarios.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <h4>Paraphrase</h4>
                        <p>A paraphrasing tool is implemented within the platform enable the user to regenerate text in a different manner in a reasonable aount of time without any restriction. One of the most popular modes of the system is the customize mode. While this is one of the best and the most recent innovations in the industry, it does not seem to be a particularly good idea to use custom in any way because of the different use cases for different text sizes.</p>
                    </div>
                    <div className='column'>
                        <h4>Summarize</h4>
                        <p>A summarizing tool that uses Artificial Intelligence is implemented within this platform enabling the user to enter some text and get a summary in a reasonable amount of time. This tool is amazing and it helps a lot especially when writing a report or an article. A full suite of reports is available with PDF files with a few basic statistics, statistics that can be useful when writing reports or writing a summary.</p>
                    </div>
                </div>
                <br />
                <h4>Get in Touch</h4>
                <label>Email</label>
                <input placeholder='email' onChange={handleEmail}/>
                <label>Feedback</label>
                <textarea className='textarea' placeholder='feedback' rows="10" onChange={handleFeedback} />
                <button className='button' onClick={send}>Submit</button>
            </div></>
    )
}