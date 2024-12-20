import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SharedModule } from 'src/shared/shared.module';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [SharedModule, InfraModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
