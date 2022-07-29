import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entitiy';
import { TaskStatus } from './tasks-status.enum';

@EntityRepository(Task)
export class TasksReposiroty extends Repository<Task> {
  async createTask(createTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
