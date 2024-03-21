import CarrosselProps from "./interfaces"
import "./styles.css";
import Image from "next/image"

const Carrossel = (props: CarrosselProps)=>{
    return(
        <>
        <div className="box">
            <Image
                src={props.image}
                width={670}
                height={60}
                alt="Imagem do carrossel"
            />
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
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