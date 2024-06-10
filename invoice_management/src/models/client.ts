import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Organization from './organization';

interface ClientAttributes {
  id: string;
  organizationId: string;
  msaValidFrom: Date | null;
  msaValidUpto: Date | null;
  legalName: string;
  ndaSignedOn: Date | null;
  shortName: string;
  ndaValidFrom: Date | null;
  ndaValidUpto: Date | null;
  addressId: string | null;
  displayName: string | null;
  isNdaSigned: boolean;
  isMsaSigned: boolean;
  msaSignedOn: Date | null;
}

class Client extends Model<ClientAttributes> {
public id!: string;
public organizationId!: string;
public msaValidFrom!: Date | null;
public msaValidUpto!: Date | null;
public legalName!: string;
public ndaSignedOn!: Date | null;
public shortName!: string;
public ndaValidFrom!: Date | null;
public ndaValidUpto!: Date | null;
public addressId!: string | null;
public displayName!: string | null;
public isNdaSigned!: boolean;
public isMsaSigned!: boolean;
public msaSignedOn!: Date | null;
}

Client.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  organizationId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Organization,
      key: 'id'
    }
  },
  msaValidFrom: {
    type: DataTypes.DATE,
    allowNull: false
  },
  msaValidUpto: {
    type: DataTypes.DATE,
    allowNull: false
  },
  legalName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ndaSignedOn: {
    type: DataTypes.DATE,
    allowNull: false
  },
  shortName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ndaValidFrom: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ndaValidUpto: {
    type: DataTypes.DATE,
    allowNull: false
  },
  addressId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isNdaSigned: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isMsaSigned: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  msaSignedOn: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Client'
});

Organization.hasMany(Client, { foreignKey: 'organizationId' });
Client.belongsTo(Organization, { foreignKey: 'organizationId' });

export default Client;
