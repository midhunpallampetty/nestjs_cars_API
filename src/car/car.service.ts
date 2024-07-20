import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.mock';
import { resolve } from 'path';
@Injectable()
export class CarService {
    private cars = CARS;
    public getCars(): Promise<any> {
        return new Promise((resolve) => {
            return resolve(this.cars);

        })
    }
    public postCars(car): Promise<any> {
        return new Promise((resolve) => {
            this.cars.push(car)
            return resolve(this.cars)

        })
    }
    public deleteCarById(id: number): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((cars) => cars.id === carId)

            if (index === -1) {
                throw new HttpException('Not found', 404);
            }
            this.cars.splice(index, 1)
            return resolve(this.cars);
        })

    }
    public getCarById(id: number): Promise<any> {
        const carId = Number(id);
        console.log('here', carId);

        return new Promise((resolve) => {
            const car = this.cars.findIndex((cars) => cars.id === carId);

            if (!car) {
                throw new HttpException('Not found', 404)
            }
           return resolve(this.cars);
        });


    }
    public putCarById(id: number, propertyName: string, propertyValue: string): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((cars) => cars.id === carId);
            if (index === -1) {
                throw new HttpException('Not found', 404);
            }
            this.cars[index][propertyName] = propertyValue;
            return resolve(this.cars);
        })

    }

}
