/*Esta consulta busca elementos de los documentos por ciertos parametros que ahora mostraremos, ademas siempre usaré pretty para que 
los datos aparezcan de forma mas ordenada*/
db.sevilla.find().pretty()
/*Contará el número de documentos que existen en la colección, en este caso hasta ahora 15*/
db.sevilla.find().count()
/*En la siguiente consulta buscaremos todos los documentos en los que el Municipio es igual a Sevilla Capital lo cual nos muestra 3 resultados*/
db.sevilla.find({ Municipio:{$eq: "Sevilla Capital"}}).pretty()
/*Ahora he echo un find para encontrar los municipios enlos que la altura de la estación meteorologica es superior a los 100 metros y que las
temperaturas minimas sean inferiores o iguales a 13*/
db.sevilla.find( { $and: [ { Altitud_Metros: { $gte: 100 } }, { TemperaturaMinima: { $lte: 13 } } ] } ).pretty()
/*Para esta consulta, vamos a usar el operador $or el cual mostrará con find los documentos que cumplan una condicion u otra*/
db.sevilla.find( { $or: [ { TemperaturaMaxima: { $gte: 20 } }, { Predicción: { $eq: "Tormenta" } } ] } ).pretty()
/*Ahora vamos a emplear el operador $regex el cual nos permite buscar por los datos de los documentos, en este caso buscamos con ^ los elementos
del documento cuyo contenido en los campos comience por Car*/
db.sevilla.find({Municipio:{$regex: /^Car/i}}).pretty()
/*La proxima consulta emplea regex otra vez, esta vez nos servirá para localizar todas las predicciones en las que el contenido
posea una T mayúscula, es decir sea Tormenta o tormentoso en caso de existir*/
db.sevilla.find( {Predicción: { $regex: /T/ } } ).pretty()
/*Con este regex vamos a mostrar por pantalla los documentos en los cuales el campo Municipio tenga como ultima letra una s minúscula y con $*/
db.sevilla.find( {Municipio: { $regex: /s$/ }}).pretty()