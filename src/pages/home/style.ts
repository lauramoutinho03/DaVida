import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.lightRed,
        paddingTop: 45,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: themes.colors.lightRed,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    buttonHeader: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: themes.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: themes.colors.lightRed,
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themes.colors.white,
        borderRadius: 5,
        paddingVertical: 5,
        width: '45%', // Usa uma largura relativa para garantir que os filtros se ajustem
        justifyContent: 'center', // Centraliza o conteúdo no botão
    },
    filterText: {
        fontSize: 16,
        color: themes.colors.black,
        textAlign: 'center',
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 15,
        //backgroundColor: themes.colors.lightRed,
    },
    boxBottom: {
        height:Dimensions.get('window').height/4,
        width: '100%',
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 115
    },

    picker: {
        width: '45%',
        height: 47,
        borderWidth: 2,
        borderColor: themes.colors.darkRed,
        borderRadius: 5,
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