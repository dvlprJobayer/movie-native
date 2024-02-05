import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

interface CastProps {
    cast: number[];
    onChangeScreen: Function;
}

const Cast = ({cast, onChangeScreen}: CastProps) => {
    const personName: string = "Keanu Reevs";
    const characterName: string  = "John Wick";

    return (
        <View style={tw`my-6`}>
            <Text style={tw`text-white text-lg mx-4 mb-5`}>Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    cast && cast.map((person, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={tw`mr-4 items-center`}
                            onPress={() => onChangeScreen("Person", person)}
                        >
                            <Image 
                                    style={tw`rounded-full h-20 w-20 border border-neutral-500`}
                                    source={require('../assets/images/castImage1.png')} 
                                />
                            <Text style={tw`text-white text-xs mt-2`}>
                                {
                                    characterName.length>10? characterName.slice(0,10)+'...' : characterName
                                }
                            </Text>
                            <Text style={tw`text-neutral-400 text-xs`}>
                                {
                                    personName.length>10? personName.slice(0,10)+'...' : personName
                                }
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default Cast;