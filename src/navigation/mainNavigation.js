import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import SigninScreen from '../authScreen/signinScreen';
import SignupScreen from '../authScreen/signupScreen';
import {hp} from '../helper/global';
import {appImage} from '../helper/image';
import {navigationRef} from '../helper/navigationRef';
import DescriptionScreen from '../screen/descriptionScreen';
import HomeScreen from '../screen/homeScreen';
import LoadingScreen from '../screen/loadingScreen';
import SettingScreen from '../screen/settingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="loading"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: hp(7),
          display: 'flex',
          backgroundColor: '#FF91A4',
          borderTopRightRadius: 50,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
        tabBarIcon: ({focused, color, height, width}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = appImage?.home;
            color = focused ? 'white' : 'black';
            height = focused ? 25 : 20;
            width = focused ? 25 : 20;
          } else if (route.name === 'Settings') {
            iconName = appImage?.settings;
            color = focused ? 'white' : 'black';
            height = focused ? 25 : 20;
            width = focused ? 25 : 20;
          }
          return (
            <Image
              style={{
                height: height,
                width: width,
              }}
              source={iconName}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="desc" component={DescriptionScreen} />
    </Stack.Navigator>
  );
};

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
