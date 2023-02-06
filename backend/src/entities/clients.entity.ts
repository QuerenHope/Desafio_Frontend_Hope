import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Contact from "./contacts.entity";

@Entity("clients")
class Clients {
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

	@OneToMany(() => Contact, (contacts) => contacts.client, {
		nullable: true,
		onDelete: "CASCADE",
	})
	contacts: Contact[];
}

export default Clients;
