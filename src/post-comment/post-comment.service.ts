import { Injectable } from '@nestjs/common';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { UpdatePostCommentDto } from './dto/update-post-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PostComment} from "./entities/post-comment.entity";

@Injectable()
export class PostCommentService {
  constructor(
      @InjectRepository(PostComment)
      private postCommentRepository: Repository<PostComment>,
  ) {}

  create(createPostCommentDto: CreatePostCommentDto) {
    const result = this.postCommentRepository.save(createPostCommentDto);
    return result;
  }

  findAll() {
    return this.postCommentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} postComment`;
  }

  update(id: number, updatePostCommentDto: UpdatePostCommentDto) {
    return `This action updates a #${id} postComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} postComment`;
  }
}
