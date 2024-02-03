import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import tw from "twrnc";
import { styles } from "../theme";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-neutral-800`}>
            {/* Search bar, Menu Icon and logo */}
            <View style={tw`flex-row justify-between items-center mx-4 mt-2`}>
                <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                <Text 
                    style={tw`text-white text-3xl font-bold`}>
                    <Text style={styles.text}>M</Text>ovies
                </Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>
    );
}

export default HomeScreen;