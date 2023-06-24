import { useColorMode, Switch } from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Switch isChecked={isDarkMode} onChange={toggleColorMode} colorScheme="teal" size="md" />
  );
};

export default DarkModeSwitch;
