import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "stocks"
})

export class Stocks extends Model{
    @Column({
        type:DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    id!:number;

    @Column({
        type:DataType.STRING,
        allowNull: false,
        unique: true
    })
    sku!:string

    @Column({
        type:DataType.INTEGER.UNSIGNED,
        allowNull: false,
        
    })
    product_track!:number

    @Column({
        type:DataType.DATE,
        allowNull: false
    })
    storing_date!:Date

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    stock_quantity!:string

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    available_stock!:string

    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    unit_buying_price!:number

    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    unit_sell_price!:number
}
