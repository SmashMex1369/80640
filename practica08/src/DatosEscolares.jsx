function DatosEscolares(){
    return(
        <>
            <fieldset>
                <legend>Datos Escolares</legend>
                <label htmlFor="nombre">Carrera:</label>
                <input type="text" id="carrera"/>
                <label htmlFor="parterno">Semestre:</label>
                <input type="text" id="semestre"/>
                <label htmlFor="parterno">Matricula:</label>
                <input type="text" id="matricula"/>
            </fieldset> 
        </>
    )
}

export default DatosEscolares