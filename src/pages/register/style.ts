import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";
import { ScrollView } from "react-native-gesture-handler";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.lightRed,
    },
    boxTop: {
        height:Dimensions.get('window').height/4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'green'
    },
    boxMid: {
        //backgroundColor: 'pink',
        height:Dimensions.get('window').height/1.7, // /4
        width: '100%',
        paddingHorizontal: 37,
        //paddingVertical: 20
    },
    boxBottom: {
        //backgroundColor: 'blue',
        height:Dimensions.get('window').height/6,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 40,
        //paddingVertical: 10,
        //justifyContent: 'flex-end',
    },
    logo: {
        width: 115,
        height: 115
    },
    title: {
        fontWeight: 'bold',
        color: themes.colors.white,
        marginTop: 15,
        fontSize: 25
    },
    textBottom: {
        fontSize: 16,
        color: themes.colors.white,
        paddingTop: 20
    },
    picker: {
        width: '100%',
        height: 47,
        borderWidth: 2,
        borderColor: themes.colors.darkRed,
        borderRadius: 19,
        marginTop: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: themes.colors.white,
    },
    pickerText: {
        color: '#777777',
        //fontSize: 16, 
        paddingVertical: 10,
    },
    iconInput: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%',
        paddingRight: 8
    },
})