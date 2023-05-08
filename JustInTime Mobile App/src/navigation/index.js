import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './screens/Settings';
import HomeStack from './stacks/HomeStack';
import ResourceStack from './stacks/ResourceStack';
import { View } from 'react-native';
import { DataProvider } from '../components/DataContext';

const MainContainer = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <View
                style={{
                    backgroundColor: '#5DADE2',
                    paddingBottom: 15,
                    height: '100%',
                }}
            >
                <DataProvider>
                    <Tab.Navigator
                        initialRouteName={'Home'}
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                let routeName = route.name;

                                if (routeName === 'Home') {
                                    iconName = focused
                                        ? 'home'
                                        : 'home-outline';
                                } else if (routeName === 'Resources') {
                                    iconName = focused
                                        ? 'albums'
                                        : 'albums-outline';
                                } else if (routeName === 'Settings') {
                                    iconName = focused
                                        ? 'settings'
                                        : 'settings-outline';
                                }

                                return (
                                    <Ionicons
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                            tabBarActiveTintColor: '#FFFFFF',
                            tabBarInactiveTintColor: '#000000',
                            tabBarStyle: {
                                padding: 10,
                                height: 70,
                                backgroundColor: '#5DADE2',
                                shadowColor: '#5DADE2',
                            },
                            tabBarItemStyle: {},
                            headerShown: false,
                        })}
                    >
                        <Tab.Screen name={'Home'} component={HomeStack} />
                        <Tab.Screen
                            name={'Resources'}
                            component={ResourceStack}
                        />
                        <Tab.Screen
                            name={'Settings'}
                            component={SettingsScreen}
                        />
                    </Tab.Navigator>
                </DataProvider>
            </View>
        </NavigationContainer>
    );
};

export default MainContainer;
