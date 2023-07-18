import React, { useEffect, useState, PureComponent,useCallback } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import { Chart } from "react-google-charts";
import { Box, Stack, Typography } from "@mui/material";
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    LineChart,
    PieChart,
    Pie,
    Sector,
    Cell,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { getAllVendas } from "../../services/postsServices";
import { getVendaById } from "../../services/postsServices";
import { getProductsInSales } from "../../services/postsServices";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { Cardnovo } from "../../Card/Card";
import { Graficos } from "./DashboardStyled";

// const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
// ];
//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#CC2042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     percent,
//     index,
// }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text
//             x={x}
//             y={y}
//             fill="white"
//             textAnchor={x > cx ? "start" : "end"}
//             dominantBaseline="central"
//         >
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.nome}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`Vendas: ${value}`}</text> 
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`( ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

export default function Dashboard() {
    const navigate = useNavigate();
    const [vendas, setVendas] = useState([]);
    const [vendasPizza, setVendasPizza] = useState([]);

    const [selectedVenda, setSelectedVenda] = useState(null);
    const [openPedidosModal, setOpenPedidosModal] = useState(false);
//////////////////////////
    async function findAllVendas() {
        const response = await getAllVendas();
        let vendalin = [];

        let vendas = response.data;
        for (let i = 0; i < vendas.length; i++) {
            let dataCurta = JSON.stringify(vendas[i].dataPedido).substring(
                1,
                11
            );
            vendas[i].dataPedido = dataCurta;
        }
        vendas.reverse();
        for (let j = 0; j < vendas.length; j++) {
            vendalin[j] = { precoTotal: vendas[j].precoTotal, dataPedido: vendas[j].dataPedido }
        }

        const resultado = {};

        for (const chave in vendalin) {
        const item = vendalin[chave];
        const precoTotal = item.precoTotal;
        const dataPedido = item.dataPedido;

            if (resultado[dataPedido]) {
                resultado[dataPedido] += precoTotal;
            } else {
                resultado[dataPedido] = precoTotal;
            }
        }

        var resultado2 = [];

        for (var dataPedido in resultado) {
            var precoTotal = resultado[dataPedido];
            resultado2.push({ dataPedido: dataPedido, precoTotal: precoTotal });
        }

        setVendas(resultado2);
    }

    async function getAllSales() {
        const response = await getProductsInSales();
        let k = 0;
        let vendapiz = [];
        for (let i = 0; i < response.data.length; i++) {
            for (let j = 0; j < response.data[i].produtos.length; j++) {
                vendapiz[k] = { pdv: response.data[i].produtos[j].produto.codigoPDV, qtd: response.data[i].produtos[j].quantidade, nome: response.data[i].produtos[j].produto.nome }                
                k++;                 
            }
            
        }

        const resultado = {};

        for (const chave in vendapiz) {
        const item = vendapiz[chave];
        const nome = item.nome;
        const qtd = item.qtd;

            if (resultado[nome]) {
                resultado[nome] += qtd;
            } else {
                resultado[nome] = qtd;
            }
        }

        var resultado2 = [];

        for (var nome in resultado) {
            var qtd = resultado[nome];
            resultado2.push({ nome: nome, qtd: qtd });
        }

        setVendasPizza(resultado2);
    }

////////////////////////////////

const [vendasid, setVendasid] = useState([]);
const [selectedVendaid, setSelectedVendaid] = useState(null);
const [openPedidosModalid, setOpenPedidosModalid] = useState(false);
//////////////////////////
async function findAllVendasid() {
    const response = await getProductsInSales();

    let vendas = response.data;
    setVendasid(response.data);
}

////////////////////////////



////////////////////////////////////
    useEffect(() => {
        sessionStatusAdmin(navigate).then(() => findAllVendas()).then(() => getAllSales());
    }, []);
    const handleProductSelect = (venda) => {
        setSelectedVenda(venda);
        setOpenPedidosModal(true);
    };





const [activeIndex, setActiveIndex] = useState(0);
const onPieEnter = useCallback(
  (_, index) => {
    setActiveIndex(index);
  },
  [setActiveIndex]
);
    
    return (
        <>
            <NavBar />
            <Graficos>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        //justifyContent: "space-",
                        flexWrap: "wrap",
                        marginTop: "40px",
                        marginLeft: "40px",
                    }}
                >
                    <div className="fundo">
                    <AreaChart width={1000} height={600} data={vendas}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dataPedido" tick={false}/>

                        <YAxis
                            type="number"
                            dataKey="precoTotal"
                            label={{
                                value: "Valor da Venda",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="precoTotal"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </AreaChart>

                    </div>
                    <div className="fundo">
                        <PieChart width={600} height={600}>
                            <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={vendasPizza} // Nome Qtd de aparições
                            cx={300}
                            cy={250}
                            innerRadius={100}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="qtd"
                            onMouseEnter={onPieEnter}
                            />
                            
                        </PieChart>
                    </div>
                    <div className="fundo">
                    <BarChart
                        width={1000}
                        height={600}
                        data={vendasPizza}
                        //   margin={{
                        //     top: 5,
                        //     right: 30,
                        //     left: 20,
                        //     bottom: 5,
                        //   }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nome" interval={0}tick={false} />
                        <YAxis
                            type="number"
                            dataKey="qtd"
                            label={{
                                value: "Quantidade Vendida",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip />

                        <Bar dataKey="qtd" fill="#82ca9d" />
                    </BarChart>

                    {/* </div>
                    <div className="fundo">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={vendas}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="precoTotal"
                        ></Pie>
                    </PieChart>

                    </div>

                    <div className="fundo">
                    {/* <Chart
                            chartType="PieChart"
                            data={vendas.precoTotal}
                            dataKey="precoTotal"
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        /> */}

                    </div> 
                    {/* <LineChart
                        width={600}
                        height={600}
                        data={vendas}
                        //margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis dataKey="dataPedido" />
                        <YAxis
                            dataKey="precoTotal"
                            label={{
                                value: "Valor da Venda",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line
                            type="monotone"
                            dataKey="precoTotal"
                            stroke="#ff7300"
                            yAxisId={0}
                        />
                    </LineChart> */}

                </Box>
            </Graficos>
        </>
    );
}
