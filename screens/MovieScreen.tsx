import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import tw from "twrnc";
import { styles, theme } from "../theme";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";

const MovieScreen = () => {
    const {params: movie} = useRoute();
    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    const {width, height} = Dimensions.get("window");
    const movieName = "Ant-Man and the Wasp: Quantumania";

    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 15}}
            style={tw`flex-1 bg-neutral-900`}
        >
            {/* Back button and Movie Poster */}
            <View style={tw`w-full`}>
                <SafeAreaView style={tw`absolute android:mt-8 z-20 w-full flex-row justify-between items-center px-4`}>
                    <TouchableOpacity style={[styles.background, tw`rounded-xl p-1`]} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                        <HeartIcon size="35" color={isFavorite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={require("../assets/images/moviePoster2.png")}
                        style={{width, height: height*0.55}}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']} 
                        style={[{width, height: height*0.40}, tw`absolute bottom-0`]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>
            </View>

            {/* Movie Details */}
            <View style={[{marginTop: -(height*0.09)}, tw`gap-y-3`]}>
                {/* Movie Title */}
                <Text style={tw`text-white text-center text-3xl font-bold tracking-widest`}>
                    {
                        movieName
                    }
                </Text>

                {/* status, release year, runtime */}
                <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                    Released  •  2020  •  170 min
                </Text>

                {/* Genres */}
                <View style={tw`flex-row justify-center mx-4 gap-x-2`}>
                    <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                        Action  •
                    </Text>
                    <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                        Thrill  •
                    </Text>
                    <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                        Comedy 
                    </Text>
                </View>

                {/* Description */}
                <Text style={tw`text-neutral-400 mx-4 text-sm tracking-wide`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum veritatis dignissimos vitae minima voluptatem adipisci nulla cumque tenetur vero quibusdam totam, non sunt consequuntur, est fuga quisquam commodi sequi.
                </Text>
            </View>

            {/* Cast Component */}
            <Cast onChangeScreen={navigation.navigate} cast={cast} />
        </ScrollView>
    );
}

export default MovieScreen;