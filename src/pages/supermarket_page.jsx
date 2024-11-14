import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const listaInicial = ['Tostadas', 'Aguacate', 'Huevo', 'Sal', 'Pimienta', 'Cafe', 'Leche', 'Galletitas', 'Quinoa', 'Pollo', 'Vegetales', 'Aliño', 'Porotos', 'Riendas', 'Verduras', 'Verduras', 'Caldo', 'Aliños', 'Salmón', 'Vegetales', 'Aliños', 'Arroz', 'Verduras', 'Huevo', 'Salsa de soya', 'Lentejas', 'Arroz', 'Verduras', 'Pasta', 'Carne molida', 'Tomates', 'Verduras', 'Masa de pizza', 'Salsa de tomate', 'Queso', 'Acelgas', 'Huevo', 'Cebolla','Agua'];

export const Supermarket = () => {
    const [lista, setLista] = useState(listaInicial);
    const [comprados, setComprados] = useState(listaInicial.map(() => false)); // Estado para los checkboxes


    const handleEliminar = (index) => {
        const nuevaLista = lista.filter((_, i) => i !== index);
        setLista(nuevaLista);
        const nuevosComprados = nuevaLista.map((_, i) => comprados[i]);

        setComprados(nuevosComprados)
    };

    const handleComprar = (index) => {

        const nuevosComprados = [...comprados];
        nuevosComprados[index] = !nuevosComprados[index];

        setComprados(nuevosComprados);


    };

    const rows = [];
    for (let i = 0; i < lista.length; i += 3) {
      const rowIngredients = lista.slice(i, i + 3);
      rows.push(
          <tr key={i}>
              {rowIngredients.map((ingredient, index) => (
                  <td key={ingredient}>
                      <input
                          type="checkbox"
                          checked={comprados[i + index]} // Usa i + index para el índice correcto
                          onChange={() => handleComprar(i + index)} // Usa i + index aquí también
                      />
                      <span style={{ textDecoration: comprados[i + index] ? 'line-through' : 'none' }}>
                          {ingredient}
                      </span>
                      <button className="button-eliminar" onClick={() => handleEliminar(i + index)}>
                          X
                      </button>
                  </td>
              ))}
          </tr>
      );
  }

    return (
        <div>
            <h1>Compras de Supermercado</h1>

            <table className="menus-table">
                <tbody>{rows}</tbody>
            </table>
            <button className="button-agregar-comida">
                <Link className="link-agregar-comida" to="/">Volver</Link>
            </button>
        </div>
    );
};

export default Supermarket;