import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const result = this.usersRepository.save(createUserDto);
    return result;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const result = await this.usersRepository.update(id, updateUserDto)
    return result;
  }

  remove(id: number) {
    this.usersRepository.delete(id);
    return `This action removes a #${id} user`;
  }
}
