import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../post/entities/post.entity";
import {User} from "../../users/entities/user.entity";
import {JoinColumn} from "typeorm/browser";

@Entity()
export class PostComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column()
    postId: number;

    @Column()
    userId: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @ManyToOne(() => Post, (post) => post.comments)
    // @JoinColumn({ name: 'postId'})
    post: Post;

    @ManyToOne(() => User, (user) => user.postComment, {eager: true})
    // @JoinColumn({ name: 'userId'})
    user: User;
}
