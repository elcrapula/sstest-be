import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { TableData3Service } from './service/table-data3.service';
import { TableData3Controller } from './table-data3.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TableData3Controller],
  providers: [TableData3Service],
})
export class TableData3Module {}
