import { TIME_UNIT } from '../enums/timer.enum';

export const milisecondsForTimeUnit = {
  [TIME_UNIT.DECISECOND]: { value: 10, quantityOnParse: 100 },
  [TIME_UNIT.SECONDS]: { value: 1000, quantityOnParse: 60 },
  [TIME_UNIT.MINUTES]: { value: 60000, quantityOnParse: 60 },
  [TIME_UNIT.HOURS]: { value: 3600000, quantityOnParse: 24 },
  [TIME_UNIT.DAYS]: { value: 86400000, quantityOnParse: 31 },
};
