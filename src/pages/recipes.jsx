import React from 'react';
import { Link } from 'react-router-dom'



const recetas = [
    { nombre: 'Tostadas con aguacate y huevo', ingredientes: ['Tostadas', 'Aguacate', 'Huevo', 'Sal', 'Pimienta'] , instrucciones: "Tostar el pan. Hacer pure de palta con sal y pimienta. Freir o revolver huevo. Disfrutar"},
    { nombre: 'Café con leche y galletas', ingredientes: ['Cafe', 'Leche', 'Galletitas'] , instrucciones: "Hacer cafe. Calentar leche. Combinar y mojar galletitas."},
    { nombre: 'Ensalada de quínoa con pollo a la parrilla', ingredientes: ['Quinoa', 'Pollo', 'Vegetales', 'Aliño'] , instrucciones: "Cocinar la quínoa. Grillar el pollo. Picar vegetales. Combinar todo y disfrutar."},
    { nombre: 'Porotos con riendas', ingredientes: ['Porotos', 'Riendas', 'Verduras'] , instrucciones: "Preparar los porotos. Cocer las riendas. Picar las verduras. Unir todo y disfrutar."},
    { nombre: 'Sopa de verduras', ingredientes: ['Verduras', 'Caldo', 'Aliños'] , instrucciones: "Picar las verduras. Cocinarlas en un caldo sabroso. Condimentar."},
    { nombre: 'Salmón al horno con vegetales', ingredientes: ['Salmón', 'Vegetales', 'Aliños'] , instrucciones: "Hornear el salmón con vegetales. Agregar especias."},
    { nombre: 'Arroz chaufa', ingredientes: ['Arroz', 'Verduras', 'Huevo', 'Salsa de soya'] , instrucciones: "Cocinar el arroz. Sofreír las verduras. Agregar huevo revuelto y salsa de soya."},
    { nombre: 'Lentejas con arroz', ingredientes: ['Lentejas', 'Arroz', 'Verduras'] , instrucciones: "Preparar las lentejas. Cocer el arroz. Picar las verduras. Servir todo junto."},
    { nombre: 'Pasta con salsa boloñesa', ingredientes: ['Pasta', 'Carne molida', 'Tomates', 'Verduras'] , instrucciones: "Cocer la pasta. Preparar la salsa boloñesa con carne molida, tomates y verduras. Mezclar todo."},
    { nombre: 'Pizza casera', ingredientes: ['Masa de pizza', 'Salsa de tomate', 'Queso', 'Ingredientes a tu gusto'] , instrucciones: "Extender la masa. Agregar salsa, queso y los ingredientes que prefieras. Hornear."},
    { nombre: 'Tortilla de acelgas', ingredientes: ['Acelgas', 'Huevo', 'Cebolla'] , instrucciones: "Cocinar las acelgas. Mezclar con huevo batido y cebolla picada. Cocinar en una sartén."},
];

export const Recipes = () => {

    return (
        <div>
             <button className= "button-agregar-comida"><Link className="link-agregar-comida" to="/">Volver</Link></button>

            <h1>Recetas Disponibles</h1>

            <table className="recipes-table"> {/* Tabla para mostrar las recetas */}
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ingredientes</th>
                        <th>Instrucciones</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {recetas.map((receta) => (
                        <tr key={receta.nombre}>
                            <td>{receta.nombre}</td>
                            <td>{receta.ingredientes.join(', ')}</td> {/* Une los ingredientes con comas */}
                            <td>{receta.instrucciones}</td>
                            <td>
                                {/* <Link to={`/edit/${receta.nombre}`} className="button-editar-comida"> 
                                    Editar
                                </Link> */}
                                <Link to={`/add`} className="button-editar-comida"> 
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className= "button-agregar-comida"> <Link className="link-agregar-comida" to="/add">Agregar Comida</Link></button>


        </div>
    );
};

export default Recipes;