import { assertIsTypedArray, isITeam, ITeam } from '.';

// invalid team
// @ts-expect-error tests
const team1: ITeam = null; // $ExpectError

// valid team
const team2: ITeam = { channels: [], iconUrl: '', id: '', name: '' };
