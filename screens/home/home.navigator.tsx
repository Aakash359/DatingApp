import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './dashboard.screen';
import { DoubleCard } from '../../assets';
import { Layout } from '../../layout/layout';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} options={{
                tabBarIcon: ({focused}) => <DoubleCard />,
                // header: () => {
                //     return (
                //         <Layout>

                //         </Layout>
                //     )
                // }
                tabBarBackground: () => <Layout/>
            }} />
        </Tab.Navigator>
    );
}