import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/sequelize';

interface ClienteAttributes {
  id?: number;
  nome: string;
  email: string;
}

class Cliente extends Model<ClienteAttributes> implements ClienteAttributes {
  public id?: number;
  public nome!: string;
  public email!: string;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'clientes',
  }
);

export default Cliente;