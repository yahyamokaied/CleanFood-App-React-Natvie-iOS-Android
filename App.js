import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
import ordersReducer from './store/reducers/orders';


StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);

const rootReducer = combineReducers({
  products: productsReducer,
  cart : cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
'Futura-Bold' : require('./assets/fonts/Futura-Bold.ttf'),
'Futura-Book' : require('./assets/fonts/Futura-Book.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (< AppLoading startAsync = {fetchFonts} onFinish={() => {
      setFontLoaded(true);
    }}
    />
    );
  }
  return (
<Provider store={store}>
<ShopNavigator />
</Provider>
  );
}

