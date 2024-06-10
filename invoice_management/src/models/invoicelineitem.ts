import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Invoice from './invoice';

interface InvoiceLineItemAttributes {
  id: string;
  invoiceId: string;
  orderNo: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes> {
public id!: string;
public invoiceId!: string;
public orderNo!: string;
public particular!: string;  
public rate!: number;
public unit!: number;
public total!: number;
}

InvoiceLineItem.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  invoiceId: {
    type: DataTypes.STRING,
    references: {
      model: Invoice,
      key: 'id'
    }
  },
  orderNo: DataTypes.STRING,
  particular: DataTypes.STRING,
  rate: DataTypes.FLOAT,
  unit: DataTypes.INTEGER,
  total: DataTypes.FLOAT,
}, {
  sequelize,
  modelName: 'InvoiceLineItem'
});

Invoice.hasMany(InvoiceLineItem, { foreignKey: 'invoiceId' });
InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'invoiceId' });

export default InvoiceLineItem;
