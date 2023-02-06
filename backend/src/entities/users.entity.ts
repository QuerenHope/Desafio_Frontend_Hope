import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";

@Entity("users")
class Users {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 200 })
	name: string;

	@Column()
	email: string;

	@Column()
	@Exclude()
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column({ default: false })
	isAdmin: boolean;

	@Column({ default: true })
	isActive: boolean;
}
export default Users;
