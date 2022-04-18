import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../post/entities/post.entity";
import {PostComment} from "../../post-comment/entities/post-comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

    @OneToMany(() => Post, (post) => post.user)
    post: Post[];

    @OneToMany(() => PostComment, (postComment) => postComment.user)
    postComment: PostComment[];

}
