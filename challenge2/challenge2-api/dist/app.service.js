"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getRoutes() {
        return [
            { title: 'Rota 1', startPosition: { latitude: -30.256489, longitude: -50.544789 }, endPosition: { latitude: -30.256489, longitude: -54.444894 } },
            { title: 'Rota 2', startPosition: { latitude: -30.121233, longitude: -51.121334 }, endPosition: { latitude: -31.256489, longitude: -53.020255 } },
            { title: 'Rota 3', startPosition: { latitude: -31.334578, longitude: -50.445767 }, endPosition: { latitude: -32.256489, longitude: -52.555987 } },
            { title: 'Rota 4', startPosition: { latitude: -32.998987, longitude: -52.122113 }, endPosition: { latitude: -33.256489, longitude: -51.544129 } },
            { title: 'Rota 5', startPosition: { latitude: -30.000145, longitude: -50.345346 }, endPosition: { latitude: -34.256489, longitude: -50.448789 } }
        ];
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map