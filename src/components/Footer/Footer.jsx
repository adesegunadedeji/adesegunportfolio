import React from 'react'
import './Footer.css'
function Footer (){
    return(
        <div className="footer">
            <div className="column1"> 
            <h7>NOW</h7>
            <ul className="menuFooter">
            <li className="Footer-item"><span className="Bullet">PSEG</span></li> 
            </ul>
            </div>
            <div className="column2"> 
            <h7> PREVIOUS</h7>
            <ul className="menuFooter">
            <li className="Footer-item"><span className="Bullet">IBM</span></li> 
            <li className="Footer-item"><span className="Bullet"> EXELON</span></li> 
            </ul>
            </div>
            <div className="column3">
                <h7>CONNECT</h7> 
            <ul className="menuFooter">
            <li className="Footer-item"><a className="a-footer" href="https://twitter.com/Ade_Segun"><span>Twitter</span></a></li>
            <li className="Footer-item"><a  className="a-footer" href="https://medium.com/@adesegunadedeji"><span>Medium</span></a></li>
            <li className="Footer-item"><a  className="a-footer" href="https://www.linkedin.com/in/adesegunadedeji/"><span>Linkedin</span></a></li>
            <li className="Footer-item"><a  className="a-footer" href="https://github.com/adesegunadedeji"><span>Github</span></a></li>
            </ul>
            </div>
        </div>
    )
}

export default Footer;