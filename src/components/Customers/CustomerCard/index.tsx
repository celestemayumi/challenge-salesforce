import "./styles.css";
import CustomerProps from "./interfaces";
import Image from "next/image";

const CustomerCard = (props: CustomerProps) => {

  return (
    <>
      <div className="blue-cloud">
        <div className="clients-content">
          <h2>Conheça as histórias dos nossos clientes</h2>
          <p className="text-2xl font-light desc">{props.desc}</p>
          <p className="font-semibold a desc">{props.author}</p>
        </div>
        <div className="">
          <Image className="clientsImg "src={props.image} width={900} height={600} alt="Nuvem azul" />
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
