
import { launchImageLibrary } from "react-native-image-picker"

export const onlaunchImageLibrary = async () => {
    let options = {
        title: "Select Photo",
        cameraType: "back",
        includeExtra: true,
    }
    const result = await launchImageLibrary(options);
    return result
}