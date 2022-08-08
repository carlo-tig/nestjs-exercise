import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
// import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import {
  GrpcMethod,
} from '@nestjs/microservices';

@Injectable()
export class TasksService {
  @InjectRepository(Task)
  private readonly repository: Repository<Task>;

  public async findOne(payload: GetTasksFilterDto): Promise<Task> {
    const task: Task = await this.repository.findOne({ where: { id:  '5f59cb51-281f-4da2-b594-29fee9524d95'} });

    if (!task) {
      throw new NotFoundException(`task not found`)
      // return { data: null, error: ['Product not found'], status: HttpStatus.NOT_FOUND };
    }

    return task
  }
  // constructor(
  //   @InjectRepository(TasksRepository)
  //   private tasksRepository: TasksRepository,
  // ) {}

  
  // @GrpcMethod('TasksService')
  // getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
  //   return this.tasksRepository.getTasks(filterDto);
  // }

  // async getTaskById(id: string): Promise<Task> {
  //   // const found = await this.tasksRepository.findOne(id);

  //   // if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   // }

  //   // return [];
  // }

  // createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //   return this.tasksRepository.createTask(createTaskDto);
  // }

  // async deleteTask(id: string): Promise<void> {
  //   const result = await this.tasksRepository.delete(id);

  //   if (result.affected === 0) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  // }

  // async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  //   const task = await this.getTaskById(id);

  //   task.status = status;
  //   await this.tasksRepository.save(task);

  //   return task;
  // }
}
