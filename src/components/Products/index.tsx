import ProductCard from "./ProductCard"
import "./styles.css";


const Products = ()=> {
    return(
        <>
           <div className="products">
                <h2 className="text-center">A Salesforce ajuda voce a reduzir custos e 
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
                        title="Pequenas Empresas"
                        desc="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                    ></ProductCard>
                    <ProductCard
                        image='/product3.svg'
                        title="Pequenas Empresas"
                        desc="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                    ></ProductCard>
                    <ProductCard
                        image='/product4.svg'
                        title="Pequenas Empresas"
                        desc="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                    ></ProductCard>
                </div>
           </div>
        </>
    )
}

export default Products