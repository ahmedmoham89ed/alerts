import { ReactNode } from "react"
import "./Alerts.scss"
import { Alerttypes } from "../../assets/date/Date"
interface Iprops{
    type:Alerttypes,
    header:string,
    icon1:ReactNode,
    icon2:ReactNode,
    text?:string,
    children?:ReactNode
}
const Alerts= ({type,header,icon1,icon2,text,children}:Iprops) => {
  return (
    <>
    <div  className={type}>
        <div className="header">
             <h2>{icon1}{header}</h2>
             <span>{icon2}</span>
        </div>
        {children?children:<p>{text}</p>}
     </div>

    </>
  )
}

export default Alerts