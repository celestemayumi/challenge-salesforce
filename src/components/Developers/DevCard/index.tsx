import "./styles.css";
import Image from "next/image";
import DevProps from "./interfaces";

const DevCard = (props: DevProps) => {
    return(
        <>
        <div className="dev-card">
            <Image
                src={props.img}
                width={150}
                height={200}
                alt="Imagem da desenvolvedora"
            />
            <div className="dev-social">
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <ul>
                <li className="text-3xl"><i className="fa-brands fa-linkedin"></i><a className='text-base ml-3 font-medium' href={props.lkdn}>Linkedin</a></li>
                <li className="text-3xl"><i className="fa-brands fa-square-github"></i><a className='text-base ml-3 font-medium' href={props.github}> GitHub</a></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default DevCard;