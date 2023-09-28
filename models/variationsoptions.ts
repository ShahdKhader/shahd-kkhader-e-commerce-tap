'use strict';
import {
  Model
} from 'sequelize';

interface VariationsOptionsAttributes{
  id: number;
  name: string;
  description: string;
  variationId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class VariationsOptions extends Model<VariationsOptionsAttributes> implements VariationsOptionsAttributes {
    id!: number;
    name!: string;
    description!: string;
    variationId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      VariationsOptions.belongsTo(models.Variations, {
        foreignKey: 'variationId',
      });
      VariationsOptions.belongsToMany(models.CartProducts, {
        through: 'CPVO',
        foreignKey: 'variationOptionId', 
        otherKey: 'cartProductId',
      });
    }
  }
  VariationsOptions.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    variationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Variations',
        key : 'id'
      }
    }  }, {
    sequelize,
    modelName: 'VariationsOptions',
  });
  return VariationsOptions;
};