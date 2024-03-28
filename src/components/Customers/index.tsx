import "./styles.css";
import CustomerCard from "./CustomerCard";

const Customers = () => {
  return (
    <>
      <div className="customer-box">
        <CustomerCard
          desc={
            <>
              “Após a adoção de soluções Salesforce, pudemos trabalhar de forma
              muito mais objetiva e direcionada graças à qualidade dos dados e
              insights que as ferramentas nos oferecem.”
            </>
          }
          author="
                    MARINA MICHEL | DIRETORA DE GLOBAL SALES PROJECTS DO GYMPASS"
          image="/gympass.svg"
        ></CustomerCard>
        <div className="slider">
          <button className="bar">Gympass</button>
          <button className="bar">Inter</button>
          <button className="bar">iFood</button>
          <button className="bar">Grupo Tigre</button>
        </div>
      </div>
    </>
  );
};

export default Customers;
