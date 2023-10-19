package mx.uv;

import static spark.Spark.*;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        get("/",
            (request, response)->"<h1>Hello World!</h1>"
        );
        get("/ruta1",
            (request, response)->"<h1>Hola mundo!</h1>"
        );
        get("/ruuat2",
            (request, response)->"<h1>Adios Mundp!</h1>"
        );
        get("/ruta3",
             (request, response)->"adios mundo"
        );
    }
}
