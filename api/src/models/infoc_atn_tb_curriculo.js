import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_curriculo extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pessoal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_atn_tb_pessoal',
        key: 'id_pessoal'
      }
    },
    id_vaga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_atn_tb_vagas',
        key: 'id_vaga'
      }
    },
    ds_curriculo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_curriculo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
      {
        name: "id_pessoal",
        using: "BTREE",
        fields: [
          { name: "id_pessoal" },
        ]
      },
      {
        name: "id_vaga",
        using: "BTREE",
        fields: [
          { name: "id_vaga" },
        ]
      },
    ]
  });
  return infoc_atn_tb_curriculo;
  }
}
