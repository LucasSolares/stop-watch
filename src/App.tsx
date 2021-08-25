import { Box, Center, Container, Text } from '@chakra-ui/react';
import Timer from './components/Timer';

const App = () => {
  return (
    <Box bgColor="teal" minH="100vh">
      <Center paddingY="8">
        <Text fontSize="2xl" color="white" fontWeight="thin">
          Lugrixx StopWatch
        </Text>
      </Center>
      <Container>
        <Timer />
      </Container>
    </Box>
  );
};

export default App;
