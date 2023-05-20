import { Outlet, useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner"
import "../App.css"
export default function Nav() {
    const navigate= useNavigate()
    return (
        <>
            <div className="container">
                <br />
                <div className="row">

                    <div className="column"><h4>Text&nbsp;<Bars
                        height="10"
                        width="10"
                        color="#332824"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />Processor</h4></div>

                    <div className="column">
                        <a href="/">Home</a>
                        &nbsp;
                        &nbsp;
                        <a href="/summarize">Summarize</a>
                        &nbsp;
                        &nbsp;
                        <a href="/summarize">Paraphrase</a>

                    </div>
                    <div className="column">
                        <button className="button float-right" onClick={()=>{navigate("/summarize")}}>Start</button>
                        &nbsp;
                        <button className="button button-clear float-right" onClick={()=>{navigate("/generate")}}>Generate</button>
                    </div>
                </div></div>
            <Outlet />

        </>
    )
}