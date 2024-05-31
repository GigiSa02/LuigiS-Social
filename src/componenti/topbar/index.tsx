import React, { useEffect, useState, useContext } from "react";
import './style.css';
import immagine from '../topbar/ls_logo-removebg-preview.png'
import { AppContext,IAppContext } from "../../context/appcontext";

function Topbar() {

    const [contData, setContData] = useState<string>('');
    const [contTitleData, setContTitleData] = useState<string>('');
    const {jsonData, setJsonData} = useContext(AppContext) as IAppContext

        function addData(input:string) {
            setContData(input); 
        }

        function addTitle(input:string) {
            setContTitleData(input);
        }


        function save () {
            if(jsonData){
                const obj = {
                    id: jsonData?.length + 1,
                    title: contTitleData,
                    body: contData,
                }
                let data = jsonData
                data.push(obj)
                setJsonData([...data])
                canc()

            }
        }

        function canc() {
            setContData('');
            setContTitleData('');
        }

    const [isClicked, setIsClicked] = useState(false);

    const show = () => {
        setIsClicked(!isClicked);
    }
    if(!isClicked === true) {
        return (
            <div className="topbar">
                <div className="imgs">
                 <img src={immagine} alt="logo" /></div>
                <label className="container">
                    <input type="checkbox" id="checkbox" checked={isClicked} onChange={show}></input>

                </label>
            </div>
        )
    } else  {
        return (
            <div className="topbar">
                <div className="imgs">
                    <img src={immagine} alt="logo" />
                </div>
                <div className="test">
                <label className="container">
                    <input type="checkbox" id="checkbox" checked={isClicked} onChange={show}></input>
                    <span className="checkmark">
                        <textarea className="titolo" placeholder="Scrivi titolo..." value={contTitleData} onChange={(event) => addTitle(event.target.value)}></textarea>
                        <textarea className="testo" placeholder="Scrivi qui..." value={contData} onChange={(event) => addData(event.target.value)}></textarea></span>
                         <button className='add' onClick={() => save()}>PUBBLICA</button>
                </label>
                </div>
            </div>
        )
    }
}


export default Topbar;
   