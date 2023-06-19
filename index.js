//Importar el Granphql y recuperar de apollo
// Importar los módulos necesarios
import {ApolloServer, gql} from 'apollo-server'
import {v1 as uuid} from 'uuid'
// Definir los datos iniciales de personas en un array llamado "persons"
const persons = [
    {
        nombre: "Esteban",
        telefono: "940563467",
        calle: "Calle Bolognesi",
        ciudad: "Arequipa",
        id: "039277b1-c9bc-4fef-91c0-e449eec9b6e3 "
    },
    {
        nombre: "Priscila",
        calle: "Calle Dolores",
        ciudad: "Moquegua",
        id: "23b1ea62-77b0-4ff4-939c-c60ad81b88dc"
    },
    {
        nombre: "Enrique",
        telefono: "965348745",
        calle: "Calle Israel",
        ciudad: "Lima",
        id: "981240e2-f881-4083-8bcd-f6d76ab2f9c4 "
    }
]
//Definiciones de los datos
//Query peticiones
//Mutation creacion de datos
// Definir los tipos de datos y consultas/mutaciones en GraphQL utilizando "gql"
const typeDefinitions = gql`
  type Person {
    nombre: String!
    telefono: String
    calle: String!
    ciudad: String!
    id: ID!
  }
  type Query{
    personCount: Int!
    allPersons: [Person]!
    findPerson(nombre: String!): Person
  }
  type Mutation{
    addPerson(
        nombre: String!
        telefono: String
        calle: String!
        ciudad: String!
    
    ):Person
    editNumber(
        nombre:String!
        telefono: String!
    ):Person
  }
`
// Resolvers para manejar las consultas y mutaciones
const resolvers = {
    Query: {
        // Resolver para la consulta "personCount" que devuelve la longitud del array "persons"
        personCount: () => persons.length, //Metodo que se encarga de recuperar los datos
        // Resolver para la consulta "allPersons" que devuelve todos los objetos del array "persons"
        allPersons: () => persons,
        // Resolver para la consulta "findPerson" que encuentra una persona por su nombre
        findPerson: (root, args) => {
            const {nombre} = args
            return persons.find(person => person.nombre == nombre)
        }
    },
    Mutation: {
        // Resolver para la mutación "addPerson" que agrega una nueva persona al array "persons"
        addPerson: (root,args ) => {
            //const{nombre, telefono, calle, ciudad} = args
            const person = { ... args,id: uuid()} // "..." es el operador spread que crea una copia de los argumentos y agrega la propiedad "id" generada con uuid()
            persons.push(person) //actualiza la base de datos con una nueva persona
            return person
        },
         // Resolver para la mutación "editNumber" que actualiza el número de teléfono de una persona
        editNumber: (root, args) => {
            const personIndex = persons.findIndex(p => p.nombre == args.nombre)
            if(!personIndex == -1) return // Si no encuentra el nombre
            
            const person = persons[personIndex]//Recorremos el indice de los nombres para encontra la posicion donde se encuentra
            const updatePerson = {...person, telefono: args.telefono}// Se crea una copia de la persona y se actualiza la propiedad "telefono"
            persons[personIndex] = updatePerson // actualizamos en el indice establecido
            return updatePerson
        }
    },
}
// Crear una instancia del servidor Apollo pasando los "typeDefs" y "resolvers" configurados
const server = new ApolloServer({
    typeDefs: typeDefinitions, //Parametros
    resolvers 
})
// Inicializar el servidor y hacer que escuche en un puerto específico
server.listen().then(({url}) => {
    console.log(`Server ready ${url}`)
})

