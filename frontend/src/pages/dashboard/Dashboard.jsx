import React, { useEffect, useState,PureComponent } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from '@mui/material';
import { AreaChart, Area,BarChart, Bar,LineChart,PieChart, Pie ,Sector, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAllVendas } from "../../services/postsServices";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { Cardnovo } from "../../Card/Card";



const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
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
    
    <AreaChart
          width={1000}
          height={500}
          data={vendas}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dataPedido" />
          
          <YAxis type="number" dataKey="precoTotal"  label={{ value: 'Valor da Venda', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Area type="monotone" dataKey="precoTotal"  stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

<BarChart
          width={400}
          height={500}
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
          <YAxis type="number" dataKey="precoTotal"  label={{ value: 'Valor da Venda', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          
          <Bar dataKey="precoTotal" fill="#82ca9d" />
        </BarChart>
        
<LineChart
          width={600}
          height={500}
          data={vendas}
          //margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
           <XAxis dataKey="dataPedido" />
          <YAxis dataKey="precoTotal" label={{ value: 'Valor da Venda', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="precoTotal" stroke="#ff7300" yAxisId={0} />
        </LineChart>
        
        <PieChart width={400} height={400}>
          <Pie
            data={vendas}
            
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="precoTotal"
          >
        
          </Pie>
        </PieChart>






        </Box>
        </Tabela>
        </>

    );
        
  };
  