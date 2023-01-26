import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "products"
})

export class Products extends Model{
    @Column({
        type:DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    product_id!:number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    product_name!:string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    product_category!:string

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    product_subCategory!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    product_brand!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    product_type!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    product_colour!:string

    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    product_size!:string

    @Column({
        type:DataType.INTEGER.UNSIGNED,
        allowNull: true
    })
    product_quantity!:number

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    product_madeBy!:string
}
