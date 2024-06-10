import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import SOWPaymentPlan from './sowpaymentplan';

interface SOWPaymentPlanItemAttributes {
  id: string;
  sowPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

class SOWPaymentPlanItem extends Model<SOWPaymentPlanItemAttributes> {
public id!: string;
public sowPaymentPlanId!: string;
public sowId!: string;
public orderId!: string;
public particular!: string;
public rate!: number;
public unit!: number;
public total!: number;
}

SOWPaymentPlanItem.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  sowPaymentPlanId: {
    type: DataTypes.STRING,
    references: {
      model: SOWPaymentPlan,
      key: 'id'
    }
  },
  sowId: DataTypes.STRING,
  orderId: DataTypes.STRING,
  particular: DataTypes.STRING,
  rate: DataTypes.FLOAT,
  unit: DataTypes.INTEGER,
  total: DataTypes.FLOAT,
}, {
  sequelize,
  modelName: 'SOWPaymentPlanItem'
});

SOWPaymentPlan.hasMany(SOWPaymentPlanItem, { foreignKey: 'sowPaymentPlanId' });
SOWPaymentPlanItem.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });

export default SOWPaymentPlanItem;
