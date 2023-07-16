import React, { useEffect, useState,PureComponent } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from '@mui/material';
import { AreaChart, Area,BarChart, Bar,LineChart,PieChart, Pie ,Sector, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAllVendas } from "../../services/postsServices";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { Cardnovo } from "../../Card/Card";



// const dataPie = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 200 },

//   ];
const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  //const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#CC2042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  export default function Dashboard(){
    const navigate = useNavigate();
    const [vendas, setVendas] = useState([]);

    const [selectedVenda, setSelectedVenda] = useState(null);
    const [openPedidosModal, setOpenPedidosModal] = useState(false);

    async function findAllVendas() {
        const response = await getAllVendas();

        let vendas = response.data;
        for (let i = 0; i < vendas.length; i++) {
          let dataCurta = JSON.stringify(vendas[i].dataPedido).substring(1, 11);
          vendas[i].dataPedido = dataCurta;

        }
        vendas.reverse();
        setVendas(response.data);
    }

    useEffect(() => {
        sessionStatusAdmin(navigate)
        .then(() => findAllVendas());
    
   

    },[]);
    const handleProductSelect = (venda) =>{
        setSelectedVenda(venda);
        setOpenPedidosModal(true);
    };


    
    return (
        <>
        <NavBar />
        <Tabela>
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
    <div className="chart">
        {console.log(vendas)}
        {vendas && vendas.length > 0 &&(
    <AreaChart
          width={600}
          height={500}
          data={vendas}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dataPedido" label={{ value: "Pages of my website",offset:0, angle: 0, position: 'insideBottom' }} />
         
          <YAxis type="number" dataKey="precoTotal"  label={{ value: 'pv of page', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Area type="monotone" dataKey="precoTotal"  stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
)}
</div>
<LineChart
          width={400}
          height={400}
          data={data}
          //margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
        
     
        <BarChart
          width={500}
          height={300}
          data={vendas}
        //   margin={{
        //     top: 5,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dataPedido" />
          <YAxis dataKey="precoTotal" />
          <Tooltip />
          <Legend />
          <Bar dataKey="precoTotal" fill="#82ca9d" />
        </BarChart>
        
        </Box>
        </Tabela>
        </>
    );
        
  };
  