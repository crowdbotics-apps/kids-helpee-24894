import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile212620Navigator from '../features/UserProfile212620/navigator';
import Tutorial212619Navigator from '../features/Tutorial212619/navigator';
import NotificationList212591Navigator from '../features/NotificationList212591/navigator';
import Settings212590Navigator from '../features/Settings212590/navigator';
import Settings212582Navigator from '../features/Settings212582/navigator';
import UserProfile212580Navigator from '../features/UserProfile212580/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile212620: { screen: UserProfile212620Navigator },
Tutorial212619: { screen: Tutorial212619Navigator },
NotificationList212591: { screen: NotificationList212591Navigator },
Settings212590: { screen: Settings212590Navigator },
Settings212582: { screen: Settings212582Navigator },
UserProfile212580: { screen: UserProfile212580Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
