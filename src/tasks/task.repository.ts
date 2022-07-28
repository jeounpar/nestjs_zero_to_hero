import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entitiy';

@EntityRepository(Task)
export class TasksReposiroty extends Repository<Task> {}
