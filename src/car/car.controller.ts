import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
@Controller('car')
export class CarController {
    constructor(private carService: CarService) { }
    @Get()
    async getCars() {
        return this.carService.getCars();
    }
    @Get(':id')
    public async getCarById(@Param('id') id: number) {
        return this.carService.getCarById(id)
    }
    @Delete(':id')
    public async deleteCarById(@Param('id') id: number) {
        return this.carService.deleteCarById(id)
    }
    @Put(':id')
    public async putCarById(@Param('id') id: number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.carService.putCarById(id, propertyName, propertyValue);
    }
    @Post()
    public async postCars(@Body() car: CarDto) {
        this.carService.postCars(car)
    }

}
