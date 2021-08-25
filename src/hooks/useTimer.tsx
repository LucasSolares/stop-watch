import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { milisecondsForTimeUnit } from '../consts/timer.const';
import { TIME_UNIT } from '../enums/timer.enum';

const useTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  const getTimeUnit = useCallback(
    (timeUnit: TIME_UNIT) => {
      const raw = Math.floor(time / milisecondsForTimeUnit[timeUnit].value);
      let withParse = raw % milisecondsForTimeUnit[timeUnit].quantityOnParse;
      

      return {
        raw,
        formatted: withParse < 10 ? `0${withParse}` : `${withParse}`,
        formattedWithoutParse: raw < 10 ? `0${raw}` : `${raw}`,
      };
    },
    [time]
  );

  const start = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pause = () => setIsPaused(!isPaused);

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + milisecondsForTimeUnit.DECISECOND.value);
      }, milisecondsForTimeUnit.DECISECOND.value);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  return {
    time,
    isPaused,
    isActive,
    pause,
    start,
    reset,
    hours: getTimeUnit(TIME_UNIT.HOURS),
    decisecond: getTimeUnit(TIME_UNIT.DECISECOND),
    seconds: getTimeUnit(TIME_UNIT.SECONDS),
    minutes: getTimeUnit(TIME_UNIT.MINUTES),
    days: getTimeUnit(TIME_UNIT.DAYS),
  };
};

export default useTimer;
