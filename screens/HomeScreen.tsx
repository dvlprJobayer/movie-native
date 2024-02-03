import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import tw from "twrnc";
import { styles } from "../theme";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import TrendingMovies from "../components/TrendingMovies";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const HomeScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3]);

    return (
        <SafeAreaView style={tw`flex-1 bg-neutral-800`}>
            <StatusBar style="light" />
            {/* Search bar, Menu Icon and logo */}
            <View style={tw`flex-row justify-between items-center mx-4 mt-8 mb-5`}>
                <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                <Text 
                    style={tw`text-white text-3xl font-bold`}>
                    <Text style={styles.text}>M</Text>ovies
                </Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>

            {/* Movies Section */}
            <ScrollView
                contentContainerStyle={{paddingBottom: 10}}
            >
                {/* Trending Movies Carousel */}
                <TrendingMovies data={trending} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;