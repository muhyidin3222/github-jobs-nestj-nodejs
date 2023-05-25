import { literal } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';
const { STRING, INTEGER } = DataType;

@Table({
  tableName: 'jobs',
})
export class JobEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: number;

  @Column({
    allowNull: true,
    type: STRING,
  })
  company: string;

  @Column({
    allowNull: false,
    type: STRING(2000),
  })
  description: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  logo: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  position: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  role: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  level: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  postedAt: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  type: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  location: string;
  
  @Column({
    allowNull: true,
    type: STRING,
  })
  company_url: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  how_to_apply: string;
}
