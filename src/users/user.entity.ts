import { Report } from 'src/reports/report.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  // Typeorm association arguments explanation:
  /** first argument: at first, the Report entity is undefined
   * since all the entities will be defined after all code get executed
   * therefore wrapping the entity in a function
   * the Report entity will be defined after wrapped function its done executed
   */
  /** second argument: its a function that is that take an instance of
   * Report entity that you are trying to relate to
   * then return the target entity instance back to the entity currently defining
   */
  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('inserted user with id', this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('updated user with id', this.id);
  }
  @AfterRemove()
  logRemove() {
    console.log('removed user with id', this.id);
  }
}
