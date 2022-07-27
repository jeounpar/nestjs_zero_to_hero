import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTaskByID(id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index < 0) return;
    this.tasks.splice(index, 1);
  }

  patchTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.tasks.find((task) => task.id === id);
    task.status = status;
    return task;
  }
}
