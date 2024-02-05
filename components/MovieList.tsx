import { Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

interface MovieListProps {
    title: string;
    data: number[];
    hideSeeAll?: boolean;
}

type Navigation = {
    push: (routeName: string, params?: number) => void;
};

const {height, width} = Dimensions.get("window");

const MovieList = ({title, data, hideSeeAll}: MovieListProps) => {
    const navigation = useNavigation<Navigation>();
    const movieName = "Ant-Man and the Wasp: Quantumania";

    return (
        <View style={tw`mb-8 gap-y-4`}>
            <View style={tw`mx-4 flex-row justify-between items-center`}>
                <Text style={tw`text-xl text-white`}>{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={[styles.text, tw`text-lg`]}>See all</Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            {/* Movie Row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    data.map((item, idx) => (
                        <Pressable
                            key={idx}
                            onPress={() => navigation.push("Movie", item)}
                        >
                            <View style={tw`gap-y-1 mr-4`}>
                                <Image
                                    source={require("../assets/images/moviePoster2.png")}
                                    style={[{height: height*0.22, width: width*0.33}, tw`rounded-3xl`]}
                                />
                                <Text style={tw`text-neutral-300`}>
                                    {
                                        movieName.length > 14 ? movieName.slice(0, 14) + "..." : movieName
                                    }
                                </Text>
                            </View>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default MovieList;