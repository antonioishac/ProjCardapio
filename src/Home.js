import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
	HomeList:{
		screen:HomeList
	},
	HomeProducts:{
		screen:HomeProducts
	}
});

export default Navegador;