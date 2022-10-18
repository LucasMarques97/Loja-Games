"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriasProviders = void 0;
const categorias_entity_1 = require("./entities/categorias.entity");
exports.categoriasProviders = [
    {
        provide: 'CATEGORIAS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(categorias_entity_1.categorias),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=categorias.providers.js.map