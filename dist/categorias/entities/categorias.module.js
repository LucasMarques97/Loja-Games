"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categorias_entity_1 = require("./categorias.entity");
const categorias_service_1 = require("../services/categorias.service");
const categorias_controller_1 = require("../controller/categorias.controller");
const database_module_1 = require("../database/database.module");
let CategoriasModule = class CategoriasModule {
};
CategoriasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([categorias_entity_1.categorias]), database_module_1.DatabaseModule],
        providers: [categorias_service_1.CategoriaService],
        controllers: [categorias_controller_1.CategoriasController],
        exports: [typeorm_1.TypeOrmModule]
    })
], CategoriasModule);
exports.CategoriasModule = CategoriasModule;
//# sourceMappingURL=categorias.module.js.map