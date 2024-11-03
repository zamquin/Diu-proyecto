import React from 'react'
import { Link } from 'react-router-dom'

// const week1 = [
//     { nombre: 'Tostadas con aguacate y huevo', ingredientes: ['Tostadas', 'Aguacate', 'Huevo', 'Sal', 'Pimienta'] , instrucciones: "Tostar el pan. Hacer pure de palta con sal y pimienta. Freir o revolver huevo. Disfrutar"},
//     { nombre: 'Café con leche y galletas', ingredientes: ['Cafe', 'Leche', 'Galletitas'] , instrucciones: "Hacer cafe. Calentar leche. Combinar y mojar galletitas."},
//     { nombre: 'Ensalada de quínoa con pollo a la parrilla', ingredientes: ['Quinoa', 'Pollo', 'Vegetales', 'Aliño'] , instrucciones: "Cocinar la quínoa. Grillar el pollo. Picar vegetales. Combinar todo y disfrutar."},
//     { nombre: 'Porotos con riendas', ingredientes: ['Porotos', 'Riendas', 'Verduras'] , instrucciones: "Preparar los porotos. Cocer las riendas. Picar las verduras. Unir todo y disfrutar."},
//     { nombre: 'Sopa de verduras', ingredientes: ['Verduras', 'Caldo', 'Aliños'] , instrucciones: "Picar las verduras. Cocinarlas en un caldo sabroso. Condimentar."},
//     { nombre: 'Salmón al horno con vegetales', ingredientes: ['Salmón', 'Vegetales', 'Aliños'] , instrucciones: "Hornear el salmón con vegetales. Agregar especias."},
//     { nombre: 'Arroz chaufa', ingredientes: ['Arroz', 'Verduras', 'Huevo', 'Salsa de soya'] , instrucciones: "Cocinar el arroz. Sofreír las verduras. Agregar huevo revuelto y salsa de soya."},
//     { nombre: 'Lentejas con arroz', ingredientes: ['Lentejas', 'Arroz', 'Verduras'] , instrucciones: "Preparar las lentejas. Cocer el arroz. Picar las verduras. Servir todo junto."},
//     { nombre: 'Pasta con salsa boloñesa', ingredientes: ['Pasta', 'Carne molida', 'Tomates', 'Verduras'] , instrucciones: "Cocer la pasta. Preparar la salsa boloñesa con carne molida, tomates y verduras. Mezclar todo."},
//     { nombre: 'Pizza casera', ingredientes: ['Masa de pizza', 'Salsa de tomate', 'Queso', 'Ingredientes a tu gusto'] , instrucciones: "Extender la masa. Agregar salsa, queso y los ingredientes que prefieras. Hornear."},
//     { nombre: 'Tortilla de acelgas', ingredientes: ['Acelgas', 'Huevo', 'Cebolla'] , instrucciones: "Cocinar las acelgas. Mezclar con huevo batido y cebolla picada. Cocinar en una sartén."},
// ];

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
  return (
    <div>

      <p>MENU PAGE</p>
      <p>En esta página encontraras una 💡 ampolleta que podrás encender y apagar con un botón</p>

      <table className="menus-table"> {/* Tabla para mostrar las recetas */}
          <thead>
              <tr>
                  <th>dia</th>
                  <th>Desayuno</th>
                  <th>Almuerzo</th>
                  <th>Cena</th>
              </tr>
          </thead>
          <tbody>
              {week2.map((week) => (
                  <tr key={week.dia}>
                      <td>{week.dia}</td>
                      <td>{week.Desayuno}</td>
                      <td>{week.Almuerzo}</td> 
                      <td>{week.Cena}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}

export default MenuPage