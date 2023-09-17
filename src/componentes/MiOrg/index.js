import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado->hooks
    //useState
    //useState()
    //Forma para definir un estado
    //const [nombreVariable,funcionActualizada]=useState(valorInicial)

    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () => {
       // actualizarMostrar(!mostrar)
    //}
      return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
      </section>  
}

export default MiOrg