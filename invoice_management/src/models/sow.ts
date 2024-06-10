import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Client from './client';

interface SOWAttributes {
  id: string;
  invoiceEmailAddresses: string[];
  customerId: string;
  customerPONumber: string | null;
  title: string;
  customerSONumber: string | null;
  validityPeriod: Record<string, any>;
  totalValue: number;
  currency: string;
}

class SOW extends Model<SOWAttributes> {
public id!: string;
public invoiceEmailAddresses!: string[];
public customerId!: string;
public customerPONumber!: string | null;
public title!: string;
public customerSONumber!: string | null;
public validityPeriod!: Record<string, any>;
public totalValue!: number;
public currency!: string;
}

SOW.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  invoiceEmailAddresses: DataTypes.ARRAY(DataTypes.STRING),
  customerId: {
    type: DataTypes.STRING,
    references: {
      model: Client,
      key: 'id'
    }
  },
  customerPONumber: DataTypes.STRING,
  title: DataTypes.STRING,
  customerSONumber: DataTypes.STRING,
  validityPeriod: DataTypes.JSON,
  totalValue: DataTypes.FLOAT,
  currency: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'SOW'
});

Client.hasMany(SOW, { foreignKey: 'customerId' });
SOW.belongsTo(Client, { foreignKey: 'customerId' });

export default SOW;
