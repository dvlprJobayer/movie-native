import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import tw from "twrnc";
import { styles } from "../theme";
import MovieList from "../components/MovieList";


const {width, height} = Dimensions.get('window');

const PersonScreen = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);
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
                {/* Image */}
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

                {/* Name and Country */}
                <View style={tw`mt-6`}>
                    <Text style={tw`text-3xl text-white font-bold text-center`}>
                        Keanu Reeves
                    </Text>
                    <Text style={tw`text-neutral-500 text-base text-center`}>
                        Beirut, Lebanon
                    </Text>
                </View>

                {/* Info */}
                <View style={tw`mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full`}>
                    <View style={tw`border-r-2 border-r-neutral-400 px-2 items-center`}>
                        <Text style={tw`text-white font-semibold`}>Gender</Text>
                        <Text style={tw`text-neutral-300 text-sm`}>
                            Male
                        </Text>
                    </View>
                    <View style={tw`border-r-2 border-r-neutral-400 px-2 items-center`}>
                        <Text style={tw`text-white font-semibold`}>Birthday</Text>
                        <Text style={tw`text-neutral-300 text-sm`}>
                            1964-09-02
                        </Text>
                    </View>
                    <View style={tw`border-r-2 border-r-neutral-400 px-2 items-center`}>
                        <Text style={tw`text-white font-semibold`}>known for</Text>
                        <Text style={tw`text-neutral-300 text-sm`}>
                            Acting
                        </Text>
                    </View>
                    <View style={tw`px-2 items-center`}>
                        <Text style={tw`text-white font-semibold`}>Popularity</Text>
                        <Text style={tw`text-neutral-300 text-sm`}>
                            84.23 %
                        </Text>
                    </View>
                </View>

                {/* Biography */}
                <View style={tw`my-6 mx-4 space-y-2`}>
                    <Text style={tw`text-white text-lg`}>Biography</Text>
                    <Text style={tw`text-neutral-400 text-sm tracking-wide`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur hic sequi iure voluptatibus tempora minus dolore quisquam dolores quod animi officia perferendis, sint cupiditate nulla sed tenetur itaque illum rem eum maxime accusantium facere! Labore repellendus accusantium a facilis architecto eveniet iusto aliquam obcaecati odio eos, fugit molestiae quasi ipsa praesentium, voluptatem cumque eum laboriosam magni vel placeat officia dignissimos quae. Rem eos sint aliquid, ea totam iusto dicta assumenda numquam quos error mollitia provident, obcaecati laboriosam accusantium temporibus!
                    </Text>
                </View>

                {/* Person Movies */}
                <MovieList title="Movies" data={personMovies} hideSeeAll={true} />
            </View>
        </ScrollView>
    );
}

export default PersonScreen;