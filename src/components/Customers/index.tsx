import "./styles.css";
import CustomerCard from "./CustomerCard";
import { useEffect, useState } from "react";
import { listCards } from "./CustomerCard/dataCards";

const Customers = () => {
  const [infoCard, setCard] = useState(listCards[0])
  
  useEffect(() => {})

  function changeCustomerCards(id: number){
    setCard(listCards[id])
  }

  return (
    <>
      <div className="customer-box">
        <CustomerCard
            desc = {infoCard.desc}
            author = {infoCard.author}
            image = {infoCard.image}
        ></CustomerCard>
        
        <div className="slider">
          <button className="bar" onClick={() => changeCustomerCards(0)}>Gympass</button>
          <button className="bar" onClick={() => changeCustomerCards(1)}>Embraer</button>
          <button className="bar ifood" onClick={() => changeCustomerCards(2)}>EBANX</button>
          <button className="bar" onClick={() => changeCustomerCards(3)}>Grupo Tigre</button>
        </div>
      </div>
    </>
  );
};

export default Customers;
