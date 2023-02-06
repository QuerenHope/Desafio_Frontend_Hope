import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Clients from "./clients.entity";

@Entity("contacts")
class Contacts {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 200 })
	name: string;

	@Column()
	email: string;

	@Column({ length: 15 })
	phone_number: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => Clients, { nullable: true, onDelete: "CASCADE" })
	client: Clients;
}

export default Contacts;
