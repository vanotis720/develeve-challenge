import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? height : width,
    screenHeight: width < height ? width : height,

};

export default metrics;