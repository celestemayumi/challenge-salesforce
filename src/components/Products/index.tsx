import ProductCard from "./ProductCard"
import "./styles.css";


const Products = ()=> {
    return(
        <>
           <div className="products">
                <h2 className="text-center">A Salesforce ajuda você a reduzir custos e 
                <br></br>
                economizar tempo</h2>
                <div className="product-box">   
                    <ProductCard
                        image='/product1.svg'
                        title="Pequenas Empresas"
                        desc="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                    ></ProductCard>
                    <ProductCard
                        image='/product2.svg'
                        title="Vendas"
                        desc="Feche mais negócios e acelere o crescimento com o CRM nº1."
                    ></ProductCard>
                    <ProductCard
                        image='/product3.svg'
                        title="Atendimento"
                        desc="Gaste menos com serviços escaláveis que os clientes adoram."
                    ></ProductCard>
                    <ProductCard
                        image='/product4.svg'
                        title="Veja todos os produtos"
                        desc="Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato."
                    ></ProductCard>
                </div>
           </div>
        </>
    )
}

export default Products