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
          {payload.name}
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
        >{`Produto ${value}`}</text>
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

        let vendas = response.data;
        for (let i = 0; i < vendas.length; i++) {
            let dataCurta = JSON.stringify(vendas[i].dataPedido).substring(
                1,
                11
            );
            vendas[i].dataPedido = dataCurta;
        }
        vendas.reverse();
        setVendas(response.data);
    }

    async function getAllSales() {
        const response = await getProductsInSales();
        let vendasPizza = response.data;
        // console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            for (let j = 0; j < response.data[i].produtos.length; j++) {
                // console.log(response.data[i].produtos.length);
                // console.log(`Nome do produto: ${response.data[i].produtos[j].produto.nome} Quantidade: ${response.data[i].produtos[j].quantidade}`);
                //setVendasPizza(response.data[i].produtos[j].produto.nome);
            }
            
        }
        // console.log(vendasPizza);
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
        sessionStatusAdmin(navigate).then(() => findAllVendas()).then(() => getAllSales()).then(() => findAllVendasid());
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

 // console.log(vendasPizza);
  //console.log(vendas)
 console.log(vendasid)


 
 const aggregatedData = vendasid.reduce((result, current) => {
    const existingData = result.find((item) => produtos.produto.nome === current.name);
    if (existingData) {
      existingData.value += current.value;
    } else {
      result.push({ name: current.name, value: current.value });
    }
    return result;
  }, []);

    
    return (
        <>
            <NavBar />
            <Graficos>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        marginTop: "40px",
                    }}
                >
                    <div className="fundo">
                    <AreaChart width={600} height={600} data={vendas}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dataPedido" />

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
                    <BarChart
                        width={1000}
                        height={600}
                        data={vendasid}
                        //   margin={{
                        //     top: 5,
                        //     right: 30,
                        //     left: 20,
                        //     bottom: 5,
                        //   }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="produtos.0.produto.nome"  />
                        <YAxis
                            type="number"
                            dataKey="produtos.0.quantidade"
                            label={{
                                value: "Valor da Venda",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip />

                        <Bar dataKey="produtos.0.quantidade" fill="#82ca9d" />
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
<div className="fundo">
 <PieChart width={600} height={600}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={vendasid} // Nome Qtd de aparições
        cx={300}
        cy={250}
        innerRadius={100}
        outerRadius={150}
        fill="#8884d8"
        dataKey="produtos.0.quantidade"
        onMouseEnter={onPieEnter}
      />
      
    </PieChart>
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
