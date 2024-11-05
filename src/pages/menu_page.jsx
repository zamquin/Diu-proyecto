import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

export const MenuPage = () => {
  const [menu1, setMenu1] = useState(week1);
  const [menu2, setMenu2] = useState(week2);

  const comidas = [
    'Café con leche y galletas',
    'Tostadas con aguacate y huevo',
    'Tortilla de acelgas',
    'Salmón al horno con vegetales',
    'Arroz chaufa',
    'Ensalada de quínoa con pollo a la parrilla',
    'Pasta con salsa boloñesa',
    'Sopa de Verduras',
    'Porotos con riendas',
    'Lentejas con arroz',
    'Pizza casera'
  ];

  const handleChange = (weekNum, dayIndex, mealType, value) => {
    if (weekNum === 1) {
      const newMenu = [...menu1];
      newMenu[dayIndex] = { ...newMenu[dayIndex], [mealType]: value };
      setMenu1(newMenu);
    } else {
      const newMenu = [...menu2];
      newMenu[dayIndex] = { ...newMenu[dayIndex], [mealType]: value };
      setMenu2(newMenu);
    }
  };

  const renderTable = (weekData, weekNum) => (
    <table className="menus-table">
      <thead>
        <tr>
          <th>Día</th>
          <th>Desayuno</th>
          <th>Almuerzo</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        {weekData.map((day, index) => (
          <tr key={day.dia}>
            <td>{day.dia}</td>
            <td>
              {day.Desayuno}
              <select 
                className="edit-select"
                value={day.Desayuno}
                onChange={(e) => handleChange(weekNum, index, 'Desayuno', e.target.value)}
              >
                {comidas.map(comida => (
                  <option key={comida} value={comida}>{comida}</option>
                ))}
              </select>
            </td>
            <td>
              {day.Almuerzo}
              <select 
                className="edit-select"
                value={day.Almuerzo}
                onChange={(e) => handleChange(weekNum, index, 'Almuerzo', e.target.value)}
              >
                {comidas.map(comida => (
                  <option key={comida} value={comida}>{comida}</option>
                ))}
              </select>
            </td>
            <td>
              {day.Cena}
              <select 
                className="edit-select"
                value={day.Cena}
                onChange={(e) => handleChange(weekNum, index, 'Cena', e.target.value)}
              >
                {comidas.map(comida => (
                  <option key={comida} value={comida}>{comida}</option>
                ))}
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <h1>Editar Menu Semanal</h1>
      
      <h3>Semana 1</h3>
      {renderTable(menu1, 1)}

      <h3>Semana 2</h3>
      {renderTable(menu2, 2)}
      
      <button className="button-agregar-comida">
        <Link className="link-agregar-comida" to="/week">Guardar Semana</Link>
      </button>
    </div>
  );
};

export default MenuPage;