import swaggerJSDoc,{OAS3Definition,OAS3Options} from "swagger-jsdoc";

const swaggerDefinition : OAS3Definition = {
    openapi: "3.0.3",
    info:{
        title:"APIREST",
        version:"1.0.0"
    },
    servers:[
        {
            url:"https://literate-telegram-p46wvqvgj7x2r5pp-5000.app.github.dev/",

        },
    ],
    components:{
        schemas:{
            task:{
                type:"object",
                required:["_id","name","description","status"],
                properties:{
                    _id:{
                        type:"string",
                    },
                    name:{
                        type:"string",
                    },
                    description:{
                        type:"string",
                    },
                    status:{
                        type:"boolean"
                    }
                }
            }
        }
    }
}

const swaggerOptions : OAS3Options = {
    swaggerDefinition,
    apis:["./src/routes/*ts"]

}

export default swaggerJSDoc (swaggerOptions)