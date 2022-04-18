import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostComment} from "../../post-comment/entities/post-comment.entity";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @OneToMany(() => PostComment, (postComment) => postComment.post, {eager: true})
    comments: PostComment[];

    @ManyToOne(() => User, (user) => user.post, {eager: true})
    // @JoinColumn({ name: 'userId'})
    user: User;

}
