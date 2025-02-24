import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import DribbleZoneHomeScreen from './pages/DribbleZoneHomeScreen';
import DribbleZoneCartScreen from './pages/DribbleZoneCartScreen';
import DribbleZoneCartSuccessScreen from './pages/DribbleZoneCartSuccessScreen';
import DribbleZoneReservationScreen from './pages/DribbleZoneReservationScreen';
import DribbleZoneReservationSuccessScreen from './pages/DribbleZoneReserveSuccessScreen';
import DribbleZoneContactsScreen from './pages/DribbleZoneContactsScreen';
import DribbleZoneTranslationsScreen from './pages/DribbleZoneTranslationsScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'DribbleZoneHomeScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'DribbleZoneTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'DribbleZoneContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'DribbleZoneReservationScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('DribbleZoneCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'DribbleZoneHomeScreen', component: DribbleZoneHomeScreen},
  {name: 'DribbleZoneCartScreen', component: DribbleZoneCartScreen},
  {
    name: 'DribbleZoneCartSuccessScreen',
    component: DribbleZoneCartSuccessScreen,
  },
  {
    name: 'DribbleZoneReservationScreen',
    component: DribbleZoneReservationScreen,
  },
  {
    name: 'DribbleZoneReservationSuccessScreen',
    component: DribbleZoneReservationSuccessScreen,
  },
  {name: 'DribbleZoneContactsScreen', component: DribbleZoneContactsScreen},
  {
    name: 'DribbleZoneTranslationsScreen',
    component: DribbleZoneTranslationsScreen,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: COLORS.white,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: '8%',
    alignItems: 'center',
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 25,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '85%',
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 12,
  },
  itemText: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.black,
    textAlign: 'center',
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
