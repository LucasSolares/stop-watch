import {
  Box,
  Button,
  HStack,
  Stack,
  Stat,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import useTimer from '../hooks/useTimer';

const Timer = () => {
  const {
    decisecond,
    seconds,
    minutes,
    hours,
    start,
    reset,
    pause,
    isPaused,
    isActive,
  } = useTimer();

  const [laps, setLaps] = useState<string[]>([]);

  return (
    <Stack>
      <Box
        bgColor="whiteAlpha.100"
        paddingY="8"
        paddingX="8"
        margin="4"
        borderRadius="8"
      >
        <Stat>
          <StatNumber fontSize="6xl" color="white">
            {hours.raw > 0 && <>{minutes.formattedWithoutParse}:</>}
            {minutes.raw > 0 && <>{minutes.formatted}:</>}
            {seconds.formatted}:{decisecond.formatted}
          </StatNumber>
        </Stat>
        <Box>
          <HStack>
            {!isActive && <Button onClick={start}>Iniciar</Button>}
            {isActive && (
              <>
                <Button onClick={pause}>
                  {isPaused ? 'Reanudar' : 'Pausar'}
                </Button>
                {isPaused && (
                  <Button
                    onClick={() => {
                      reset();
                      setLaps([]);
                    }}
                  >
                    Reiniciar
                  </Button>
                )}
                {!isPaused && (
                  <Button
                    onClick={() => {
                      setLaps([
                        ...laps,
                        `${hours.formattedWithoutParse}:${minutes.formatted}:${seconds.formatted}:${decisecond.formatted}`,
                      ]);
                    }}
                  >
                    Lap
                  </Button>
                )}
              </>
            )}
          </HStack>
        </Box>
      </Box>
      {laps.length && (
        <Box
          bgColor="whiteAlpha.100"
          paddingY="8"
          paddingX="8"
          margin="4"
          borderRadius="8"
          maxHeight="xs"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'white',
              borderRadius: '24px',
            },
          }}
        >
          <Stack>
            <Text color="white">Laps</Text>
            {laps.map((lap, index) => (
              <Stat>
                <HStack>
                  <StatNumber color="blackAlpha.600">#{index}</StatNumber>
                  <StatNumber color="white">{lap}</StatNumber>
                </HStack>
              </Stat>
            ))}
          </Stack>
        </Box>
      )}
    </Stack>
  );
};

export default Timer;
