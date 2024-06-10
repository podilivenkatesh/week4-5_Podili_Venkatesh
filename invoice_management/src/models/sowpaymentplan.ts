import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import SOW from './sow';

interface SOWPaymentPlanAttributes {
  id: string;
  sowId: string;
  orderId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

class SOWPaymentPlan extends Model<SOWPaymentPlanAttributes> {
public id!: string;
public sowId!: string;
public orderId!: string;
public plannedInvoiceDate!: Date;
public totalActualAmount!: number;
}

SOWPaymentPlan.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  sowId: {
    type: DataTypes.STRING,
    references: {
      model: SOW,
      key: 'id'
    }
  },
  orderId: DataTypes.STRING,
  plannedInvoiceDate: DataTypes.DATE,
  totalActualAmount: DataTypes.FLOAT,
}, {
  sequelize,
  modelName: 'SOWPaymentPlan'
});

SOW.hasMany(SOWPaymentPlan, { foreignKey: 'sowId' });
SOWPaymentPlan.belongsTo(SOW, { foreignKey: 'sowId' });

export default SOWPaymentPlan;
