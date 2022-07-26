import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entitiy';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 55000,
      username: 'postgres',
      password: 'postgrespw',
      database: 'task-management',
      entities: [Task, User],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
