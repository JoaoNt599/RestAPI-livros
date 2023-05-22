import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorID)
    .post("/livros", LivroController.cadastraLivro)
    .put("/livros/:id", LivroController.atulaizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;