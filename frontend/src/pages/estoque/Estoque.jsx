import { Card } from "../../Card/Card";
import { NavBar } from "../../components/navBar/NavBar";
import "./EstoqueStyled.css";
import { news } from "../../Datas";

export default function Estoque() {
    return (
        <>
            <NavBar />

            <div className="input-search-space">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Código ou nome do produto" />
            </div>

            {news.map((iten) => {
                return <Card key={iten} news={iten} />;
            })}
        </>
    );
}

//   {news.map((item, index)=>{
//             return(
//                 <Card key={index} news={item}/>
//             )
//         })}
