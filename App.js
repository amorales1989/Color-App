import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home/home';
import AmbientesInteriores from './src/components/AmbientesInteriores';
import AmbientesExteriores from './src/components/AmbientesExteriores';
import OtrasSuperficies from './src/components/OtrasSuperficies';
import CiclosDeCalor from './src/components/AmbientesInteriores/MaterialesFerrosos/CiclosDeCalor/CiclosDeCalor';
import MaterialesFerrosos from './src/components/AmbientesInteriores/MaterialesFerrosos/MaterialesFerrosos';
import Hasta200 from './src/components/AmbientesInteriores/MaterialesFerrosos/CiclosDeCalor/Hasta200°C';
import SplashScreen from './src/home/Inicio';
import MaterialesNoFerrosos from './src/components/AmbientesInteriores/MaretrialeNoFerrosos/MaterialesNoFerrosos';
import Mamposteria from './src/components/AmbientesInteriores/Mamposteria/Mamposteria';
import Hormigon from './src/components/AmbientesInteriores/Hormigon/Hormigon';
import Pisos from './src/components/AmbientesInteriores/Hormigon/Pisos/Pisos';
import Paredes from './src/components/AmbientesInteriores/Hormigon/Paredes/Paredes';
import TanquesContenedores from './src/components/AmbientesInteriores/Hormigon/Tanques Contenedores/Tanques Contenedores';
import EquiposProductivos from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposProductivos/EquiposProductivos';
import EquiposNoProductivos from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposNOproductivos/EquiposNoProductivos';
import TanquesContenedoresMF from './src/components/AmbientesInteriores/MaterialesFerrosos/TanquesContenedores/TanquesContenedores';
import Hasta400 from './src/components/AmbientesInteriores/MaterialesFerrosos/CiclosDeCalor/Hasta400°C';
import Hasta550 from './src/components/AmbientesInteriores/MaterialesFerrosos/CiclosDeCalor/Hasta550°C';
import NormalEP from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposProductivos/Normal';
import ModeradoEP from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposProductivos/Moderado';
import AgresivoEP from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposProductivos/Agresivo';
import NormalENP from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposNOproductivos/Normal';
import ModeradoENP from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposNOproductivos/Moderado';
import AgresivoENP from './src/components/AmbientesInteriores/MaterialesFerrosos/EquiposNOproductivos/Agresivo';
import AgresivoTC from './src/components/AmbientesInteriores/MaterialesFerrosos/TanquesContenedores/Agresivo';
import ModeradoTC from './src/components/AmbientesInteriores/MaterialesFerrosos/TanquesContenedores/Moderado';
import NormalTC from './src/components/AmbientesInteriores/MaterialesFerrosos/TanquesContenedores/Normal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AmbientesInteriores" component={AmbientesInteriores} options={{ headerShown: false }} />
        <Stack.Screen name="AmbientesExteriores" component={AmbientesExteriores} options={{ headerShown: false }} />
        <Stack.Screen name="OtrasSuperficies" component={OtrasSuperficies} options={{ headerShown: false }} />
        <Stack.Screen name="MaterialesFerrosos" component={MaterialesFerrosos} options={{ headerShown: false }} />
        <Stack.Screen name="EquiposProductivos" component={EquiposProductivos} options={{ headerShown: false }} />
        <Stack.Screen name="NormalEP" component={NormalEP} options={{ headerShown: false }} />
        <Stack.Screen name="ModeradoEP" component={ModeradoEP} options={{ headerShown: false }} />
        <Stack.Screen name="AgresivoEP" component={AgresivoEP} options={{ headerShown: false }} />
        <Stack.Screen name="EquiposNoProductivos" component={EquiposNoProductivos} options={{ headerShown: false }} />
        <Stack.Screen name="NormalENP" component={NormalENP} options={{ headerShown: false }} />
        <Stack.Screen name="ModeradoENP" component={ModeradoENP} options={{ headerShown: false }} />
        <Stack.Screen name="AgresivoENP" component={AgresivoENP} options={{ headerShown: false }} />
        <Stack.Screen name="TanquesContenedoresMF" component={TanquesContenedoresMF} options={{ headerShown: false }} />
        <Stack.Screen name="NormalTC" component={NormalTC} options={{ headerShown: false }} />
        <Stack.Screen name="ModeradoTC" component={ModeradoTC} options={{ headerShown: false }} />
        <Stack.Screen name="AgresivoTC" component={AgresivoTC} options={{ headerShown: false }} />
        <Stack.Screen name="CiclosDeCalor" component={CiclosDeCalor} options={{ headerShown: false }} />
        <Stack.Screen name="Hasta200" component={Hasta200} options={{ headerShown: false }} />
        <Stack.Screen name="Hasta400" component={Hasta400} options={{ headerShown: false }} />
        <Stack.Screen name="Hasta550" component={Hasta550} options={{ headerShown: false }} />
        <Stack.Screen name="MaterialesNoFerrosos" component={MaterialesNoFerrosos} options={{ headerShown: false }} />
        <Stack.Screen name="Mamposteria" component={Mamposteria} options={{ headerShown: false }} />
        <Stack.Screen name="Hormigon" component={Hormigon} options={{ headerShown: false }} />
        <Stack.Screen name="Pisos" component={Pisos} options={{ headerShown: false }} />
        <Stack.Screen name="Paredes" component={Paredes} options={{ headerShown: false }} />
        <Stack.Screen name="TanquesContenedores" component={TanquesContenedores} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
