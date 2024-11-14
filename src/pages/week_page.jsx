import React from 'react'
import { Link } from 'react-router-dom'

const week1 = [
  { dia: 'Lunes', Desayuno:'Café con leche y galletas', Almuerzo:'Tortilla de acelgas', Cena:'Pizza casera'},
  { dia: 'Martes',Desayuno:'Tostadas con aguacate y huevo', Almuerzo:'Salmón al horno con vegetales', Cena:'Lentejas con arroz' },
  { dia: 'Miercoles',Desayuno: 'Tostadas con aguacate y huevo', Almuerzo:'Arroz chaufa', Cena:'Ensalada de quínoa con pollo a la parrilla'},
  { dia: 'Jueves', Desayuno:'Café con leche y galletas', Almuerzo:  'Pasta con salsa boloñesa', Cena: 'Sopa de Verduras'},
  { dia: 'Viernes',Desayuno: 'Café con leche y galletas', Almuerzo: 'Porotos con riendas', Cena:'Lentejas con arroz'},
  { dia: 'Sabado', Desayuno:'Tostadas con aguacate y huevo', Almuerzo: 'Arroz chaufa', Cena: 'Pizza casera'},
  { dia: 'Domingo', Desayuno: 'Tostadas con aguacate y huevo', Almuerzo:'Ensalada de quínoa con pollo a la parrilla', Cena:'Tortilla de acelgas'},
];

const week2 = [
    { dia: 'Lunes', Desayuno:'Tostadas con aguacate y huevo', Almuerzo: 'Arroz chaufa', Cena: 'Pizza casera'},
    { dia: 'Martes', Desayuno:'Café con leche y galletas', Almuerzo:  'Pasta con salsa boloñesa', Cena: 'Sopa de Verduras'},
    { dia: 'Miercoles', Desayuno: 'Tostadas con aguacate y huevo', Almuerzo:'Ensalada de quínoa con pollo a la parrilla', Cena:'Tortilla de acelgas'},
    { dia: 'Jueves',Desayuno: 'Café con leche y galletas', Almuerzo: 'Porotos con riendas', Cena:'Lentejas con arroz'},
    { dia: 'Viernes',Desayuno: 'Tostadas con aguacate y huevo', Almuerzo:'Arroz chaufa', Cena:'Ensalada de quínoa con pollo a la parrilla'},
    { dia: 'Sabado', Desayuno:'Café con leche y galletas', Almuerzo:'Tortilla de acelgas', Cena:'Pizza casera'},
    { dia: 'Domingo',Desayuno:'Tostadas con aguacate y huevo', Almuerzo:'Salmón al horno con vegetales', Cena:'Lentejas con arroz' },
];

export const WeekPage = () => {
    const renderTable = (weekData) => (
        <table className="menus-table">
            <thead>
                <tr>
                    <th>Comida</th>
                    {weekData.map((day) => (
                        <th key={day.dia}>{day.dia}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {['Desayuno', 'Almuerzo', 'Cena'].map((mealType) => (
                    <tr key={mealType}>
                        <td>{mealType}</td>
                        {weekData.map((day) => (
                            <td key={`${day.dia}-${mealType}`}>{day[mealType]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div>
            <h1>Menú Semanales</h1>
            <button className="button-agregar-comida">
                <Link className="link-agregar-comida" to="/">Volver</Link>
            </button>

            <h3>Semana 1</h3>
            {renderTable(week1)} {/* Renderiza la tabla para la semana 1 */}

            <h3>Semana 2</h3>
            {renderTable(week2)} {/* Renderiza la tabla para la semana 2 */}

            <button className="button-agregar-comida">
                <Link className="link-agregar-comida" to="/supermarket">Ver Lista de Compras</Link>
            </button>
        </div>
    );
};

export default WeekPage;