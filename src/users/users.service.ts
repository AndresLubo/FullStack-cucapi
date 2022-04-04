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

  update(id: number, updateUserDto: UpdateUserDto) {
    const result = this.usersRepository.update(id, updateUserDto)
    return `Se actualizó el usuario con el id ${id}`;
  }

  remove(id: number) {
    this.usersRepository.delete(id);
    return `This action removes a #${id} user`;
  }
}
