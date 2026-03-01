import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    type: 'varchar',
    length: 96,
    unique: true,
    nullable: false,
  })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Post, (post) => post.author)
  posts!: Post[];
}
