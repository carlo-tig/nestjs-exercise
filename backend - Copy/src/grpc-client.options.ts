import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      'hero', 
      'tasks'
  ], // ['hero', 'hero2']
    protoPath: [
      join(__dirname, './hero/hero.proto'),
      join(__dirname, './tasks/tasks.proto')
    ] // ['./hero/hero.proto', './hero/hero2.proto']
  },
};
