import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Param,
  Query,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CreateTaskRequest } from 'src/domain/models/tasks/create-task';
import { TaskModel } from 'src/domain/models/tasks/task';
import { UpdateTaskRequest } from 'src/domain/models/tasks/update-task';
import { FilterTaskRequest } from 'src/domain/models/tasks/filter-task';
import { AuthGuard } from '../guards/auth.guard';
import { DeleteTaskRequest } from 'src/domain/models/tasks/delete-task';
import { TaskStatusModel } from 'src/domain/models/tasks/task-status';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    type: TaskModel,
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  create(@Body() data: CreateTaskRequest, @Req() request: Request) {
    const { id: userId } = request['user'];
    return this.tasksService.create({ ...data, userId });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put()
  @ApiResponse({
    status: HttpStatus.OK,
    type: undefined,
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  update(@Body() data: UpdateTaskRequest) {
    return this.tasksService.update(data);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':taskId')
  @ApiResponse({
    status: HttpStatus.OK,
    type: undefined,
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  delete(@Param() { taskId }: DeleteTaskRequest) {
    return this.tasksService.delete(Number(taskId));
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [TaskModel],
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  filter(@Query() data: FilterTaskRequest, @Req() request: Request) {
    const { id: userId } = request['user'];
    return this.tasksService.filter({ ...data, userId });
  }

  @HttpCode(HttpStatus.OK)
  @Get('/status')
  @ApiResponse({
    status: HttpStatus.OK,
    type: [TaskStatusModel],
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  listStatuses() {
    return this.tasksService.listStatuses();
  }
}
