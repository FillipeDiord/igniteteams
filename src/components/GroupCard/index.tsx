import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

type GroupCardProps = {
  title: string;
} & TouchableOpacityProps;

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  )
}