import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksReposiroty } from './task.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TasksReposiroty])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
