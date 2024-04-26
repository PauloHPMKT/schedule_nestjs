import { Global, Module, Provider } from '@nestjs/common';
import { makeDatabaseProvider } from './providers/database.provider';

const providers: Provider[] = [...makeDatabaseProvider()];

@Global()
@Module({
  providers,
  exports: providers,
})
export class DatabaseModule {}
