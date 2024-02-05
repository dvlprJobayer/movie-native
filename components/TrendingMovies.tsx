import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import tw from "twrnc";

interface TrendingMoviesProps {
    data: number[]
}

const {width, height} = Dimensions.get("window");

const TrendingMovies = ({data}: TrendingMoviesProps) => {
    return (
        <View style={tw`mb-8`}>
            <Text style={tw`text-white text-xl mx-4 mb-5`}>Trending</Text>
            <Carousel
                data={data}
                renderItem={({item}) => <MovieCard item={item} />}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{display: "flex", alignItems: "center"}}
            />
        </View>
    );
}

export default TrendingMovies;

const MovieCard = ({item}: {item: number}) => {
    const navigation = useNavigation();

    const handleMovieScreen = () => {
        navigation.navigate("Movie", item);
    }

    return (
        <Pressable onPress={handleMovieScreen}>
            <Image 
                source={require("../assets/images/moviePoster1.png")} 
                style={[{width: width * 0.6, height: height * 0.4}, tw`rounded-3xl`]}
            />
        </Pressable>
    )
}