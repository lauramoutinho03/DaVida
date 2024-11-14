import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginVertical: 2,
        marginHorizontal: 16,
        backgroundColor: themes.colors.white,
        borderWidth: 2,
        borderColor: themes.colors.darkRed,
        borderRadius: 5,
      },
      content: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      subtitle: {
        fontSize: 14,
      },
      button: {
        backgroundColor: themes.colors.lightGrey,
        padding: 8,
        borderRadius: 50,
      },
      buttonText: {
        color: themes.colors.black,
        fontSize: 13,
      },
})