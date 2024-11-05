import React from 'react'
import { Link } from 'react-router-dom'

const lista = ['Tostadas', 'Aguacate', 'Huevo', 'Sal', 'Pimienta', 'Cafe', 'Leche', 'Galletitas', 'Quinoa', 'Pollo', 'Vegetales', 'Aliño', 'Porotos', 'Riendas', 'Verduras', 'Verduras', 'Caldo', 'Aliños', 'Salmón', 'Vegetales', 'Aliños', 'Arroz', 'Verduras', 'Huevo', 'Salsa de soya', 'Lentejas', 'Arroz', 'Verduras', 'Pasta', 'Carne molida', 'Tomates', 'Verduras', 'Masa de pizza', 'Salsa de tomate', 'Queso', 'Acelgas', 'Huevo', 'Cebolla','Agua']

export const Supermarket = () => {
  const rows = [];
  for (let i = 0; i < lista.length; i += 3) {
    const rowIngredients = lista.slice(i, i + 3);
    rows.push(
      <tr key={i}>
        {rowIngredients.map((ingredient) => (
          <td key={ingredient}>{ingredient}</td>
        ))}
      </tr>
    );
  }
  
  return (
    <div>
      
      <h1> Compras de Supermercado </h1>
      
      <table className="menus-table">
        <tbody>{rows}</tbody>
      </table>
      <button className= "button-agregar-comida"><Link className="link-agregar-comida" to="/">Volver</Link></button>
    </div>
  )
}

export default Supermarket