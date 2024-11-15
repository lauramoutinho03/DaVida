import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.darkRed,
        padding: 16,
    },
    backButton: {
        top: 35,
        left: 16,
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: themes.colors.white,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2, // Sombras para Android
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        marginTop: 80, // Para não ficar coberto pelo botão
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },

})