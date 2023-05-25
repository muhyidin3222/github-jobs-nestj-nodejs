import { JobEntity } from './jobs.entity';
import { UserEntity } from './user.entity';

const user_provider = {
  provide: 'USER_REPOSITORY',
  useValue: UserEntity,
};
const jobs_provider = {
  provide: 'JOBS_REPOSITORY',
  useValue: JobEntity,
};

export { user_provider, jobs_provider };
