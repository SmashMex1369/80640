function DatosPersonsales(){
    return(
        <>
            <fieldset>
                <legend>Datos Personales</legend>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre"/>
                <label htmlFor="parterno">Apellido Paterno:</label>
                <input type="text" id="paterno"/>
                <label htmlFor="parterno">Apellido Materno:</label>
                <input type="text" id="materno"/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
            </fieldset> 
        </>
    )
}

export default DatosPersonsales