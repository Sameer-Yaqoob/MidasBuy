
import Link from 'next/Link';
import { Text } from '@chakra-ui/react';
const MenuItem = ({ children, isLast, to = '/' }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        color="headerText"
      >
        <Link href={to}>{children}</Link>
      </Text>
    );
  };
  export default MenuItem