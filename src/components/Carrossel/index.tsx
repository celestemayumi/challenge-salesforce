import CarrosselProps from "./interfaces"
import "./styles.css";
import Image from "next/image"

const Carrossel = (props: CarrosselProps)=>{
    return(
        <>
        <div className="box">
            <div className="carrossel-img">
            <img src={props.image} alt="" />
            </div>
            <div className="content">
                <div className="">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                </div>
                <div className="buttons">
                    <button className="btn-blue">{props.btn}</button>
                    <button className="btn-white">Saiba Mais</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carrossel