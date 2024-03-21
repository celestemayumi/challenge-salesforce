import "./styles.css";
import ProductCard from "./interfaces";
import Image from "next/image";

const ProductCard = (props: ProductCard) => {
  return (
    <>
      <div className="card">
        <div className="flex justify-center">
          <Image src={props.image} width={250} height={200} alt="" />
        </div>

        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button>Saiba Mais</button>
      </div>
    </>
  );
};

export default ProductCard;
