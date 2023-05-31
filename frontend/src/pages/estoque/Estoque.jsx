import { Card } from "../../Card/Card";
import { NavBar } from "../../components/navBar/NavBar";
import "./EstoqueStyled.css";
import { products } from "../../Datas";

export default function Estoque() {
    return (
        <>
            <NavBar />

            <div className="input-search-space">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Código ou nome do produto" />
            </div>

            {products.map((codigoPDV) => {
                return <Card key={codigoPDV} products={codigoPDV} />;
            })}
        </>
    );
}

//   {news.map((item, index)=>{
//             return(
//                 <Card key={index} news={item}/>
//             )
//         })}
