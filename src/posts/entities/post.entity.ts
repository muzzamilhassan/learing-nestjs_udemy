import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title!: string;

  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType!: postType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug!: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status!: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: Date;

  tags?: string[];

  @OneToOne(() => MetaOption, {
    onDelete: 'CASCADE', // this is use to delete the metaOptions column if the post column is deleted. onDelete means that if the post column is deleted, the metaOptions column will be deleted.
    cascade: true, // this is use to cascade the metaOptions column to the post table. casecade means that if the metaOptions column is deleted, the post column will be deleted.
    eager: true, // this is use to eager load the metaOptions column to the post table. eager means that if the post column is loaded, the metaOptions column will be loaded.
  }) // this is use to join the metaOptions column to the post table using one to one relationship
  @JoinColumn({ name: 'metaOptionsId' }) // this is use to join the metaOptions column to the post table
  metaOptions?: MetaOption;

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author!: User;
}
