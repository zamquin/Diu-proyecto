import React, { useState } from 'react';
import '../stylesheets/add_food.scss';
import { Link } from 'react-router-dom'


export const Menu = () => {
    const [tipoComida, setTipoComida] = useState('');
    const [nombrePlato, setNombrePlato] = useState('');
    const [ingredientes, setIngredientes] = useState('');

    const handleTipoComidaChange = (event) => {
        setTipoComida(event.target.value);
    };

    const handleNombrePlatoChange = (event) => {
        setNombrePlato(event.target.value);
    };

    const handleIngredientesChange = (event) => {
        setIngredientes(event.target.value);
    };

    const agregarComida = () => {
        // Aquí iría la lógica para agregar la comida (por ahora, solo mostramos los datos en la consola)
        if (tipoComida && nombrePlato && ingredientes){

            console.log('Tipo de comida:', tipoComida);
            console.log('Nombre del plato:', nombrePlato);
            console.log('Ingredientes:', ingredientes);


            // Limpiar los campos después de agregar
            setTipoComida('');
            setNombrePlato('');
            setIngredientes('');
            alert("Comida agregada exitosamente!")
        } else {
            alert("Debes rellenar todos los campos")
        }


    };

    return (
        <div className="menu-container">
            <button className="button-volver">
                <Link className="link-volver" to="/recipes">Volver</Link>
            </button>
            <h1>EAT SANO</h1>

            <div className="form-container">
                <div className="select-container">
                    <label htmlFor="tipoComida">Selecciona el tipo de comida:</label>
                    <select id="tipoComida" value={tipoComida} onChange={handleTipoComidaChange}>
                        <option value="">Selecciona...</option>
                        <option value="Desayuno">Desayuno</option>
                        <option value="Almuerzo">Almuerzo</option>
                        <option value="Cena">Cena</option>
                    </select>
                </div>

                <div className="input-container">
                    <label htmlFor="nombrePlato">Nombre del Plato:</label>
                    <input
                        type="text"
                        id="nombrePlato"
                        value={nombrePlato}
                        onChange={handleNombrePlatoChange}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="ingredientes">Ingredientes:</label>
                    <input
                        type="text"
                        id="ingredientes"
                        value={ingredientes}
                        onChange={handleIngredientesChange}
                    />
                </div>

                <button className="button-agregar" onClick={agregarComida}>
                    Agregar Comida
                </button>
            </div>
        </div>
    );
};

export default Menu;