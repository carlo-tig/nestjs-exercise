import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Inject
} from '@nestjs/common';
import {
  ClientGrpc,
  GrpcMethod,
  GrpcStreamMethod,
} from '@nestjs/microservices';
// import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  @Inject(TasksService)
  
  private readonly service: TasksService;
  
  @Get()
  findOne(payload: GetTasksFilterDto): Promise<Task> {
    return this.service.findOne(payload);
  }

  // constructor(
  //   @InjectRepository(TasksRepository) private tasksRepository: TasksRepository, 
  //   @Inject('TASKS_PACKAGE') private readonly client: ClientGrpc) {}

  // onModuleInit() {
  //   this.tasksService = this.client.getService<TasksService>('TasksService');
  // }
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto) {
  //   return "asdasdada"
  // }
  
  
  // @GrpcMethod('TasksService')
  // findMany(filterDto: GetTasksFilterDto): Observable<Task[]> {
  //   return this.tasksRepository.getTasks(filterDto);
  // }
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
  //   return this.tasksService.getTasks(filterDto);
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): Promise<void> {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Promise<Task> {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
