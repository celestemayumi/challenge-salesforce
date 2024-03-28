import "./styles.css";
import CustomerProps from "./interfaces";
import Image from "next/image";

const CustomerCard = (props: CustomerProps) => {
  return (
    <>
      <div className="blue-cloud">
        <div className="textClients">
          <h2>Conheca as historias dos nossos clientes</h2>
          <p className="text-2xl font-light mt-10">{props.desc}</p>
          <p className="mt-10 font-semibold	 text-lg">{props.author}</p>
        </div>
        <div className="">
          <Image className="clientsImg"src={props.image} width={900} height={600} alt="Nuvem azul" />
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
