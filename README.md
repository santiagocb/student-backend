
# CONSUMIR API BACKEND STUDENT APP

El modelo de estudiante es el siguiente.

```
id: {
    type: String,
    unique: true,
    required: true
},
name: {type: String},
lastname: {type: String},
email: {type: String},
professor: {type: String},
summary: [
    {
    percentage: {type:Number},
    score:{type: Number},
    _id: false
    }
]
```

e.g

```
{
	"id": "103589659",
	"name": "Santiago",
	"lastname": "Cadavid",
	"email": "santiago@udea.co",
	"professor": "Carlos",
	"summary": [
		{
			"percentage": 15.0,
        	"score": 4
		},
		{
			"percentage": 75.0,
        	"score": 3
		},
		{
			"percentage": 10.0,
        	"score": 5
		}
	]
}
```

**NOTA**: Para facilitar el consumo se deja en el repositorio una colección de postman para que pueda ser importada
y realizar dicho consumos.

**NOTA 2**: Para facilitar la configuración de la db, se añade al repositorio un archivo *docker-compose* para subir la db local.
Con solo correr el comando *docker compose up* se sube mongo en el puerto por defecto (27017) y un gestor visual de mongo en el puerto (8081).
Con correr localhost:8081, se puede visualizar dicha interfaz y hacer modificaciones sobre la db.

## 1. Entregar una colección
Para entregar la colección completa de estudiantes se debe consumir la ruta:
```GET /v1/students```

## 2. Entregar un registro
Para entregar un registro de un estudiante específico se debe consumir la ruta:
```GET /v1/students/:id    e.g   GET /v1/students/103589659```

## 3. Modificar un registro
Para actualizar un registro de un estudiante específico se debe consumir la ruta:
```PUT /v1/students/:id    e.g   GET /v1/students/103589659```
Y enviar en el 'request body' los campos que se quieren actualizar.
```
{
	"name": "test",
	"lastname": "test",
	"email": "test@udea.net"
}
```

## 4. Crear un registro
Para registrar un estudiante se debe consumir la ruta:
```POST /v1/students```
Y enviar en el 'request body' los datos del estudiante a crear.
e.g del request, véase anteriormente el modelo de estudiante.

## 5. Eliminar un registro
Para eliminar un estudiante se debe consumir la ruta:
```DELETE /v1/students/103589659   e.g /v1/students/103589659```

## 6. Modificar todos los registros que cumplan con un criterio
Para modificar varios registros que cumplan un filtro se debe consumir la ruta:
```PUT /v1/students?filter=value   e.g /v1/students?name=Santiago```
Los filtros se envían por query params, los cuales hacen referencia a los atributos del modelo de estudiantes.
Otros ejemplos:
- /v1/students?professor=Carlos
- /v1/students?id=103589659
- /v1/students?professor=Carlos&name=Santiago
El request body es semenjante a cuando se actualiza un usuario específico, es decir, cualquier atributo del modelo del estudiante.
e.g
```
{
	"email": "test@udea.net"
}
```

## 7. Entregar el promedio de las notas de todos los estudiantes de un curso
Para obtener el promedio de notas de los estudiantes se debe consumir la ruta:
```GET /v1/students/scores/means```
