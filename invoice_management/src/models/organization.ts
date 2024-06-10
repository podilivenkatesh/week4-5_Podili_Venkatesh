import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface OrganizationAttributes {
    id : string;
    gstNo: string | null;
    panNo: string | null;
    legalOrganizationName: string;
    invoiceTemplateId: string | null;
    shortName: string;
    contactName: string | null;
    displayName: string | null;
    email: string | null;
    addressId: string | null;
    phone: string | null;
  }

  class Organization extends Model<OrganizationAttributes> {
  public id! : string;
  public gstNo!: string | null;
  public panNo!: string | null;
  public legalOrganizationName!: string;
  public invoiceTemplateId!: string | null;
  public shortName!: string;
  public contactName!: string | null;
  public displayName!: string | null;
  public email!: string | null;
  public addressId!: string | null;
  public phone!: string | null;
  }

  Organization.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    gstNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    panNo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legalOrganizationName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceTemplateId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Organization'
  });
  
  export default Organization;