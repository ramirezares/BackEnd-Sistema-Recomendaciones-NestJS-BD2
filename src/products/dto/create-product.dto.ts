import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsNotEmpty, IsPositive, Matches } from 'class-validator';

export class CreateProductDto {

    //TODO - Colocarle a todas los atributos
    // el decorador api property

    @ApiProperty(
        {
            description: 'Nombre del producto',
            type: String,
            example: 'Producto 1'
        }
    )
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty(
        {
            description: 'Descripcion del producto',
            type: String,
            example: 'Descripcion del producto'
        }
    )
    @IsString()
    @IsOptional()
    readonly description: string;

    @ApiProperty(
        {
            description: 'Precio del producto',
            type: Number,
            example: 100.0
        }
    )
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @ApiProperty(
        {
            description: 'ID de la categoria',
            type: String,
            example: '1'
        }
    )
    @IsString()
    @IsNotEmpty()
    readonly categoryID: string;

    @ApiProperty(
        {
            description: 'Calificaciones del producto',
            type: Number,
            example: 4
        }
    )
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly rating: number;

    @ApiProperty(
        {
            description: 'Imagen del producto',
            type: String,
            example: 'https://www.imagen-producto-1.com'
        }
    )
    @IsString()
    @IsNotEmpty()
    readonly image: string;




}
