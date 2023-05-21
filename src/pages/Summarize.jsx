import image from "../assets/bulb.jpg"
import "../App.css"
import { useState } from "react"
import axios from "axios"
import { Bars } from "react-loader-spinner"
import FileSaver from "file-saver";
export default function Summarize() {
    const [spinner, setSpinner] = useState(false);
    const [data, setData] = useState('')
    const [res, setRes] = useState('result...')
    const api = "https://backend.textprocessor.live"
    const handleSummarize = () => {
        setRes("Loading Results... Please wait")
        setSpinner(true)
        axios.post(api + "/summarize", {
            data: data
        }).then((res) => {
            if (res.status == 200) {
                var result = (res.data['data']).replace(/(\r\n|\n|\r)/gm, "");
                setRes(JSON.stringify(result))
                setSpinner(false)
                //alert(res.data['data'])
            } else {
                alert("Internal server error")
                setSpinner(false)
            }

        })
    }
    const handleParaphrase = () => {
        setRes("Loading Results... Please wait")
        setSpinner(true)
        axios.post(api + "/paraphrase", {
            data: data
        }).then((res) => {
            if (res.status == 200) {
                setRes(JSON.stringify(res.data['data']))
                setSpinner(false)
            } else {
                alert("Internal server error")
                setSpinner(false)
            }

        })
    }
    const handleDownload = () => {
        var file = new Blob([res])
        var fileUrl = URL.createObjectURL(file);
        FileSaver.saveAs(fileUrl, `result.txt`)
    }
    const handleData = (e) => {
        setData(e.target.value)
    }
    return (
        <><div className="container">
            <div className='c'>
                <img className="img2" src={image} />
                <div className="top-left">
                    <h2>Your advertisement goes here</h2>

                </div>
            </div>

            <div className="container color3">

                <blockquote>You can type text in English and get a summary in one click</blockquote>

            </div>

            <div className="container color3">
                <br />
                <div className="box">
                    <div className="one">  <button className="button float-left" onClick={() => { navigator.clipboard.writeText(res); alert("copied to clipboard") }}>copy</button></div>
                    <div className="two"><button className="button float-right" onClick={handleDownload}>DOWNLOAD</button></div>
                </div>
                <blockquote><p>{res}</p></blockquote>

                {spinner == true ? <Bars
                    height="80"
                    width="80"
                    color="#332824"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> : <></>}
            </div>
            <div className="row">

                <div className="column">
                    <div className="container color3">
                        <br />
                        <div className="box">
                            <div className="one">
                                <button className="button" onClick={handleSummarize}>Summarize</button>
                            </div>
                            
                          
                            <div className="two">
                                <button className="button float-right" onClick={handleParaphrase}>Paraphrase</button>
                            </div>
                        </div>

                        <center> <label>Enter some Text</label></center>
                        <textarea className="textarea3" placeholder="Write some text" onChange={handleData}></textarea>
                    </div>
                </div>

            </div>
        </div></>
    )
}