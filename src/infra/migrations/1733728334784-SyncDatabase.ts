import { MigrationInterface, QueryRunner } from "typeorm";

export class SyncDatabase1733728334784 implements MigrationInterface {
    name = 'SyncDatabase1733728334784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task_status\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`start_date\` datetime NULL, \`end_date\` datetime NULL, \`user_id\` int NULL, \`status_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_6ea2c1c13f01b7a383ebbeaebb0\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_b8747cc6a41b6cef4639babf61d\` FOREIGN KEY (\`status_id\`) REFERENCES \`task_status\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);

        await queryRunner.query(`INSERT INTO \`task_status\` (\`id\`, \`name\`) VALUES (1, 'Pending')`);
        await queryRunner.query(`INSERT INTO \`task_status\` (\`id\`, \`name\`) VALUES (2, 'In Progress')`);
        await queryRunner.query(`INSERT INTO \`task_status\` (\`id\`, \`name\`) VALUES (3, 'Done')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_b8747cc6a41b6cef4639babf61d\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_6ea2c1c13f01b7a383ebbeaebb0\``);
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP TABLE \`task_status\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
