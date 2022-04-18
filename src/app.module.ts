import {Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/entities/user.entity";
import {UsersService} from "./users/users.service";
import { PostModule } from './post/post.module';
import { PostCommentModule } from './post-comment/post-comment.module';
import {PostComment} from "./post-comment/entities/post-comment.entity";
import {Post} from "./post/entities/post.entity";

@Module({
  imports: [UsersModule,
  TypeOrmModule.forRoot(
      {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "elpunknomuere1",
        database: "cucApi",
        entities: [User, Post, PostComment],
        synchronize: true,
      }
  ),
  PostModule,
  PostCommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
