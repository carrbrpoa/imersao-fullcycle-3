import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getRoutes(): any {
        return [
            { title: 'Rota 1', latitude: -30.256489, longitude: -50.544789 },
            { title: 'Rota 2', latitude: -30.121233, longitude: -51.121334 },
            { title: 'Rota 3', latitude: -31.334578, longitude: -50.445767 },
            { title: 'Rota 4', latitude: -32.998987, longitude: -52.122113 },
            { title: 'Rota 5', latitude: -30.000145, longitude: -50.345346 }];
    }
}
