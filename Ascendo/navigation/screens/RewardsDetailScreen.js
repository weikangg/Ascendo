import React from "react";
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet 
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function RewardDetailScreen({ navigation }) {
    const route = useRoute();
    const { image, featureText } = route.params; // get reward details passed in route

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={image}
                resizeMode='contain'
            />
            <Text style={styles.message}>Redeem {featureText}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    image: {
        width: 315,
        height: 273,
        marginTop: 20,
    },
    message: {
        position: 'absolute',
        top: 362,
        width: 324,
        height: 61,
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 21,
        lineHeight: 25,
        color: '#000000',
    },
});
