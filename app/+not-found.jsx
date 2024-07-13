import {Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

function NotFoundScreen() {
  return (
      <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary gap-10'}>
        <Text className={'text-primary-foreground text-3xl font-mMedium'}>Oops!</Text>
        <Text className={'text-primary-foreground'}>This screen doesn't exist.</Text>
        <Link href="/" className={'text-secondary'}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </SafeAreaView>
  );
}

export default NotFoundScreen;
