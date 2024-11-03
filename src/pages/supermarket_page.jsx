import React from 'react'

const lista = ['Tostadas', 'Aguacate', 'Huevo', 'Sal', 'Pimienta', 'Cafe', 'Leche', 'Galletitas', 'Quinoa', 'Pollo', 'Vegetales', 'Aliño', 'Porotos', 'Riendas', 'Verduras', 'Verduras', 'Caldo', 'Aliños', 'Salmón', 'Vegetales', 'Aliños', 'Arroz', 'Verduras', 'Huevo', 'Salsa de soya', 'Lentejas', 'Arroz', 'Verduras', 'Pasta', 'Carne molida', 'Tomates', 'Verduras', 'Masa de pizza', 'Salsa de tomate', 'Queso', 'Ingredientes a tu gusto', 'Acelgas', 'Huevo', 'Cebolla']

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
      <p>Supermarket</p>

      <table className="menus-table">
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default Supermarket