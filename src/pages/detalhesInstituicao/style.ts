import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.darkRed,
        padding: 16,
    },
    backButton: {
        top: 40,
        zIndex: 1,
        //left: 16,
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: themes.colors.white,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2, // Sombras para Android
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: themes.colors.white,
        //backgroundColor: themes.colors.black,
        //textAlign: "center",
        left: 100,
        marginBottom: 11,
        marginTop: 5,
    },
    infoContainer: {
        backgroundColor: themes.colors.evenLighterGrey,
        flex: 1,
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 10,
        position: "relative",
    },
    subtitle: {
        fontSize: 16,
        color: themes.colors.black,
        marginBottom: 2,
    },
    bold: {
        fontWeight: 'bold',
        marginTop: 5
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: themes.colors.black,
        marginTop: 55,
        marginBottom: 15
        //backgroundColor: themes.colors.white,
    },
    nivelRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    tipoText: {
        fontSize: 16,
        color: themes.colors.black,
        width: 40,
    },
    nivelContainer: {
        flexDirection: "row",
        marginLeft: 8,
    },
    niveisContainer: {
        alignItems: "center",
        //backgroundColor: themes.colors.white,
    },
    legendaContainer: {
        //height:Dimensions.get('window').height/15,
        //backgroundColor: themes.colors.white,
        alignItems: 'center',
        marginTop: 16,
        position: 'absolute',
        bottom: 30,
        left: 15,
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 8,
    },
    legendaText: {
        fontSize: 11,
        color: themes.colors.black,
        textAlign: "center",
        marginTop: 4,
    },

})