import { ITeam } from '../../src/types';
import { expectAssignable, expectNotAssignable } from 'tsd';

// invalid team
expectNotAssignable<ITeam>(null);

// valid team
expectAssignable<ITeam>({
  channels: [],
  iconUrl: '',
  id: '',
  name: '',
});
