"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.deleteProduct = exports.createProduct = void 0;
const products_1 = require("../models/products");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_1.Products.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Product created successfully", data: products });
});
exports.createProduct = createProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProduct = yield products_1.Products.findByPk(id);
    yield products_1.Products.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Product deleted successfully", data: deletedProduct });
});
exports.deleteProduct = deleteProduct;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield products_1.Products.findAll();
    return res
        .status(200)
        .json({ message: "Product fetched successfully", data: allProducts });
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_1.Products.findByPk(id);
    return res
        .status(200)
        .json({ message: "Product fetched successfully", data: product });
});
exports.getProductById = getProductById;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield products_1.Products.update(Object.assign({}, req.body), { where: { id } });
    const updatedProduct = yield products_1.Products.findByPk(id);
    return res
        .status(200)
        .json({ message: "Product updated successfully", data: updatedProduct });
});
exports.updateProduct = updateProduct;
