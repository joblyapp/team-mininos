import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title:"Documentacion API SpicesYumm",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3001/api",
        },
    ],
    paths:{
        "/categories":{
            "get":{
                "tags": [ "categories" ],
                "summary": "Listar categorias",
                "description": "Obten todas las categorias de comidas",
                "responses": {
                    "200": {
                        "description": "Retorna la listas de las categorias de comidas.",
                        "content": {
                        "application/json": {
                            "schema": {
                            "$ref": "#/components/schemas/category"
                            }
                        },
                        }
                    },
                    "422": {
                        "description": "Error de validacion."
                    }
                }
            },
            "post":{
                "tags": [ "categories" ],
                "summary": "Create category",
                "description": "Registra una categoria de comida y obtener el detalle del registro",
                "requestBody": {
                    "description": "Registra una categoria de comida    ",
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/category"
                        }
                      },
                    },
                    "required": true
                },
                "responses": {
                    "201": {
                        "description": "Retorna el objeto insertado en la coleccion.",
                        "content": {
                        "application/json": {
                            "schema": {
                            "$ref": "#/components/schemas/category"
                            }
                        },
                        }
                    },
                    "422": {
                        "description": "Error de validacion."
                    }
                }
            },
        },
        "/categories/{id}":{
            "put": {
                "tags": [
                  "categories"
                ],
                "summary": "Update category",
                "description": "Actualiza una categoria de comida y obtener el detalle del registro",
                "parameters": [
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id de la categoría de la comida",
                    "required": true,
                    "schema": {
                      "type": "string"
                    }
                  }
                ],
                "requestBody": {
                    "description": "Actualiza una categoria de comida",
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/category"
                        }
                      },
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Retorna el objeto actualizado en la coleccion."
                      },
                    "422": {
                        "description": "Error de validacion."
                    }
                },
            },
            "delete": {
                "tags": [
                  "categories"
                ],
                "summary": "Eliminar categoria de comida",
                "description": "Elimiar el detalle de una categoria de comida",
                "parameters": [
                  {
                    "name": "id",
                    "in": "path",
                    "description": "Id de la categoría de la comida",
                    "required": true,
                    "schema": {
                      "type": "string"
                    }
                  }
                ],
                "responses": {
                    "204": {
                        "description": "Elimina y no content to return."
                      },
                    "422": {
                        "description": "Error de validacion."
                    }
                },
            }
        }
    },
    components:{
        schemas:{
            category: {
                type: "object",
                required: ["name"],
                properties: {
                    name: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                }
            }
        }
    }
};

const options: OAS3Options = {
    swaggerDefinition,
    apis: ["./routes/*.ts"],
};

const openApiConfiguration = swaggerJSDoc(options);
export default openApiConfiguration;
