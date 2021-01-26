import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
