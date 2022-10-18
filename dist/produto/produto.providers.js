"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtosProviders = void 0;
const produto_entity_1 = require("./entities/produto.entity");
exports.produtosProviders = [
    {
        provide: 'PRODUTO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(produto_entity_1.Produto),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=produto.providers.js.map