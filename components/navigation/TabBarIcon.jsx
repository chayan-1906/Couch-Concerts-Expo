import Ionicons from '@expo/vector-icons/Ionicons';

function TabBarIcon({style, ...rest}) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export default TabBarIcon;
