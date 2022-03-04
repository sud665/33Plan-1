'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "today_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "todays",
        key: "id"
      }
    })
    await queryInterface.addColumn("goods", "today_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "todays",
        key: "id"
      }
    })
    await queryInterface.addColumn("tryings", "today_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "todays",
        key: "id"
      }
    })
    await queryInterface.addColumn("bads", "today_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "todays",
        key: "id"
      }
    })
    await queryInterface.addColumn("countPerWeeks", "good_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "goods",
        key: "id"
      }
    })
    await queryInterface.addColumn("countPerWeeks", "trying_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "tryings",
        key: "id"
      }
    })
    await queryInterface.addColumn("countPerWeeks", "bad_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "bads",
        key: "id"
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "today_id")
    await queryInterface.removeColumn("goods", "today_id")
    await queryInterface.removeColumn("tryings", "today_id")
    await queryInterface.removeColumn("bads", "today_id")
    await queryInterface.removeColumn("countPerWeeks", "good_id")
    await queryInterface.removeColumn("countPerWeeks", "good_id")
    await queryInterface.removeColumn("countPerWeeks", "good_id")

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};