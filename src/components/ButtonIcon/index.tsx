import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Icon,
  ButtonIconTypeStyleProps
} from './styles';

type ButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
} & TouchableOpacityProps;

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  )
}