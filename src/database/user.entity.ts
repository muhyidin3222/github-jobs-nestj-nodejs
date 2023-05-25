import { Table, Column, Model, DataType } from 'sequelize-typescript';
const { STRING, INTEGER } = DataType;

@Table({
  tableName: 'users',
})
export class UserEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: number;

  @Column({
    allowNull: true,
    type: STRING(2000),
  })
  email: string;

  @Column({
    allowNull: false,
    type: STRING(2000),
  })
  password: string;
}
