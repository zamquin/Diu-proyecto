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

export const MenuPage = () => {
  return (
    <div>
      <h1>Editar Menu Semanal</h1>

      <h3> Semana 1 </h3>
      <table className="menus-table"> 
          <thead>
              <tr>
                  <th>dia</th>
                  <th>Desayuno</th>
                  <th>Almuerzo</th>
                  <th>Cena</th>
              </tr>
          </thead>
          <tbody>
              {week1.map((week) => (
                  <tr key={week.dia}>
                      <td>{week.dia}</td>
                      <td>{week.Desayuno} <button className="button-Editar-comida">Editar</button></td>
                      <td>{week.Almuerzo} <button className="button-Editar-comida">Editar</button></td> 
                      <td>{week.Cena} <button className="button-Editar-comida" >Editar </button></td>
                  </tr>
              ))}
          </tbody>
      </table>

      <h3> Semana 2</h3>

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
                      <td>{week.Desayuno} <button className="button-Editar-comida">Editar</button></td>
                      <td>{week.Almuerzo} <button className="button-Editar-comida">Editar</button></td> 
                      <td>{week.Cena} <button className="button-Editar-comida">Editar</button></td>
                  </tr>
              ))}
          </tbody>
      </table>
      
      <button className= "button-agregar-comida"> <Link className="link-agregar-comida" to="/week">Guardar Semana</Link></button>
    </div>
  )
}

export default MenuPage