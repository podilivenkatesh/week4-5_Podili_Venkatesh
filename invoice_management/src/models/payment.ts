import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Invoice from './invoice';

interface PaymentAttributes {
  id: string;
  paymentDate: Date;
  forExAmount: number;
  currency: string;
  indianAmount: number;
  invoiceId: string;
  isFullPayment: boolean;
  bankPaymentDetails: Record<string, any>;
}

class Payment extends Model<PaymentAttributes> {
public id!: string;
public paymentDate!: Date;
public forExAmount!: number;
public currency!: string;
public indianAmount!: number;    
public invoiceId!: string;
public isFullPayment!: boolean;
public bankPaymentDetails!: Record<string, any>;
}

Payment.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  paymentDate: DataTypes.DATE,
  forExAmount: DataTypes.FLOAT,
  currency: DataTypes.STRING,
  indianAmount: DataTypes.FLOAT,
  invoiceId: {
    type: DataTypes.STRING,
    references: {
      model: Invoice,
      key: 'id'
    }
  },
  isFullPayment: DataTypes.BOOLEAN,
  bankPaymentDetails: DataTypes.JSON,
}, {
  sequelize,
  modelName: 'Payment'
});

Invoice.hasMany(Payment, { foreignKey: 'invoiceId' });
Payment.belongsTo(Invoice, { foreignKey: 'invoiceId' });

export default Payment;
