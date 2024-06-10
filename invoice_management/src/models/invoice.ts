import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import SOWPaymentPlan from './sowpaymentplan';

interface InvoiceAttributes {
  id: string;
  totalInvoiceValue: number;
  sowId: string;
  status: string;
  invoiceSentOn: Date | null;
  customerId: string;
  paymentReceivedOn: Date | null;
  invoiceVersionNumber: string;
  sowPaymentPlanId: string;
  invoiceAmount: number;
  invoiceTaxAmount: number;
}

class Invoice extends Model<InvoiceAttributes> {
public id!: string;
public totalInvoiceValue!: number;
public sowId!: string;
public status!: string;
public invoiceSentOn!: Date | null;
public customerId!: string;
public paymentReceivedOn!: Date | null;
public invoiceVersionNumber!: string;
public sowPaymentPlanId!: string;
public invoiceAmount!: number;
public invoiceTaxAmount!: number;
}

Invoice.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  totalInvoiceValue: DataTypes.FLOAT,
  sowId: DataTypes.STRING,
  status: DataTypes.STRING,
  invoiceSentOn: DataTypes.DATE,
  customerId: DataTypes.STRING,
  paymentReceivedOn: DataTypes.DATE,
  invoiceVersionNumber: DataTypes.STRING,
  sowPaymentPlanId: {
    type: DataTypes.STRING,
    references: {
      model: SOWPaymentPlan,
      key: 'id'
    }
  },
  invoiceAmount: DataTypes.FLOAT,
  invoiceTaxAmount: DataTypes.FLOAT,
}, {
  sequelize,
  modelName: 'Invoice'
});

SOWPaymentPlan.hasMany(Invoice, { foreignKey: 'sowPaymentPlanId' });
Invoice.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });

export default Invoice;
