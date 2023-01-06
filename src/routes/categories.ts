import express from "express";
import { createCategory, getCategories, deleteCategory, updateCategory } from "../controllers/categories";
import { validatorCreateCategory, validatorGetCategory, validatorUpdateCategory } from "../validators/categories";
const router = express.Router();

/**
 * Get all categories
 * @openapi
 *  /categories:
 *    get:
 *      tags:
 *          - categories
 *      summary: "Listar categorias"
 *      description: Obten todas las categorias de comidas
 *      responses:
 *        '200':
 *          description: Retorna la listas de las categorias de comidas.
 *          content:
 *           application/json:
 *             schema:
 *               type: array    
 *               items:
 *                 $ref: '#/components/schemas/category'
 *        '422':
 *          description: Error de validacion.
 */
router.get("/", getCategories);

/**
 * Register new category
 * @openapi
 * /categories:
 *    post:
 *      tags:
 *        - categories
 *      summary: "Create category"
 *      description: Registra una categoria de comida y obtener el detalle del registro
 *      responses:
 *        '201':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/category"
 */
router.post("/", validatorCreateCategory, createCategory);

/**
 * Update category
 * @openapi
 * /categories/{id}:
 *    put:
 *      tags:
 *        - categories
 *      summary: "Update category"
 *      description: Actualiza una categoria de comida y obtener el detalle del registro
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Id de la categoría de la comida.
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto actualizado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/category"
 */
router.put("/:id", validatorUpdateCategory, updateCategory);

/**
 * Delete category
 * @openapi
 * /categories/{id}:
 *    delete:
 *      tags:
 *        - categories
 *      summary: "Eliminar categoria de comida"
 *      description: Elimiar el detalle de una categoria de comida
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Id de la categoría de la comida
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '204':
 *          description: Elimina y no content to return.
 *        '422':
 *          description: Error de validacion.
 */
router.delete("/:id", validatorGetCategory, deleteCategory);

export {router};