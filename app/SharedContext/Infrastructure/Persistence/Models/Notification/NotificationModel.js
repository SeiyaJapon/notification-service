const sequelize = require("../../../config/database");
const { DataTypes } = require("sequelize");

const NotificationModel = sequelize.define('Notification', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'notifications',
    timestamps: true,
});

module.exports = NotificationModel;