import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresdb/dbconfig';

class Employee extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public assignedShiftHours!: number;
  public role!: 'SuperAdmin' | 'Manager' | 'Employee';
}

Employee.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedShiftHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
      defaultValue: 'Employee',
    },
  },
  {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
  }
);

export default Employee;
