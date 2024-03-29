import "./styles.css";
import PlansProps from "./interfaces";
import Image from "next/image";

const PlansCard = (props:PlansProps)=>{
    return(
        <>
        <div className="plans-card">
            <div>
            <Image
                src={props.img}
                height={280}
                width={280}
                alt="Imagem do plano"
            />
            </div>
            <div className="card-content">
                <h4 className="mb-4">{props.title}</h4>
                <p className="mb-4 font-medium">{props.desc}</p>
                <button className="b"><i className="fa-solid fa-check"></i> {props.type1}</button>
                <button className="b"><i className="fa-solid fa-check"></i> {props.type2}</button>
                <button className="b"><i className="fa-solid fa-check"></i> {props.type3}</button>
                <button className="mt-6 bt">Saiba Mais</button>
            </div>
        </div>
        </>
    )
}

export default PlansCard;