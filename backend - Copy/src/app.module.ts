import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroModule } from './hero/hero.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [HeroModule,TasksModule,  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgresql-84835-0.cloudclusters.net',
    port: 17301,
    username: 'nestjs',
    password: 'Connectos2022',
    database: 'nestjs',
    autoLoadEntities: true,
    synchronize: true
  })],
})
export class AppModule {}
