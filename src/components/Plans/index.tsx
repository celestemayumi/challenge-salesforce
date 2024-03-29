import "./styles.css";
import PlansCard from "./PlansCard";

const Plans = () => {
  return (
    <>
      <p className="planstitle">Veja nossos planos e servicos</p>
      <div className="plans-box">
        <PlansCard
          img="/plan1.svg"
          title="Planos de Sucesso"
          desc="Obtenha o nível ideal de suporte, orientação e expertise para seus negócios, com um dos Planos de Sucesso Salesforce."
          type1="Standard"
          type2="Premier"
          type3="Signature"
        />
        <PlansCard
          img="/plans2.svg"
          title="Servicos Profissionais"
          desc="Transforme sua empresa, ative a implementação e continue inovando sem parar, com a ajuda no nosso time imbatível de especialistas da Salesforce."
          type1="Assurance Services"
          type2="Transformation Services"
          type3="Implementationm Delivery"
        />
      </div>
    </>
  );
};

export default Plans;
