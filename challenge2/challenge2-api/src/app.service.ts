import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getRoutes(): any {
        return [
            { title: 'Rota 1', startPosition: {latitude: -30.256489, longitude: -50.544789 }, endPosition: {latitude: -30.256489, longitude: -54.444894 }},
            { title: 'Rota 2', startPosition: {latitude: -30.121233, longitude: -51.121334 }, endPosition: {latitude: -31.256489, longitude: -53.020255 }},
            { title: 'Rota 3', startPosition: {latitude: -31.334578, longitude: -50.445767 }, endPosition: {latitude: -32.256489, longitude: -52.555987 }},
            { title: 'Rota 4', startPosition: {latitude: -32.998987, longitude: -52.122113 }, endPosition: {latitude: -33.256489, longitude: -51.544129 }},
            { title: 'Rota 5', startPosition: {latitude: -30.000145, longitude: -50.345346 }, endPosition: {latitude: -34.256489, longitude: -50.448789 }}];
    }
}
