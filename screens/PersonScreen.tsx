import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import tw from "twrnc";
import { styles } from "../theme";


const {width, height} = Dimensions.get('window');

const PersonScreen = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();

    return (
        <ScrollView
            style={tw`flex-1 bg-neutral-900`} 
            contentContainerStyle={{paddingBottom: 20}}
        >
            {/* back button */}
            <SafeAreaView 
                style={tw`flex-row justify-between items-center mx-4 z-10 android:mt-8`}
            >
                <TouchableOpacity style={[styles.background, tw`rounded-xl p-1`]} onPress={()=> navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setIsFavorite(!isFavorite)}>
                    <HeartIcon size="35" color={isFavorite? 'red': 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* Person Details */}
            <View>
                <View style={[tw`items-center`,
                    {
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 1,
                        elevation: 5
                    }
                ]}>
                    <View style={tw`items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2`}>
                        <Image
                            source={require("../assets/images/castImage2.png")}
                            style={{height: height*0.43, width: width*0.74}}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default PersonScreen;