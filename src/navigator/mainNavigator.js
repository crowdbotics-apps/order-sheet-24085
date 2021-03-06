import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile196986Navigator from '../features/UserProfile196986/navigator';
import Tutorial196985Navigator from '../features/Tutorial196985/navigator';
import NotificationList196957Navigator from '../features/NotificationList196957/navigator';
import Settings196956Navigator from '../features/Settings196956/navigator';
import Settings196948Navigator from '../features/Settings196948/navigator';
import UserProfile196946Navigator from '../features/UserProfile196946/navigator';
import BlankScreen19196924Navigator from '../features/BlankScreen19196924/navigator';
import ArticleList196907Navigator from '../features/ArticleList196907/navigator';
import ArticleList196906Navigator from '../features/ArticleList196906/navigator';
import ArticleList196905Navigator from '../features/ArticleList196905/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile196986: { screen: UserProfile196986Navigator },
Tutorial196985: { screen: Tutorial196985Navigator },
NotificationList196957: { screen: NotificationList196957Navigator },
Settings196956: { screen: Settings196956Navigator },
Settings196948: { screen: Settings196948Navigator },
UserProfile196946: { screen: UserProfile196946Navigator },
BlankScreen19196924: { screen: BlankScreen19196924Navigator },
ArticleList196907: { screen: ArticleList196907Navigator },
ArticleList196906: { screen: ArticleList196906Navigator },
ArticleList196905: { screen: ArticleList196905Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
