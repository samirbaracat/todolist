import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#333333',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        padding: 16
    },
    name: {
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    nameDecoration: {
        fontSize: 16,
        color: '#F0F0F0',
        marginLeft: 16,
        textDecorationLine: 'line-through',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonCheck: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    iconeCheck: {
        width: 24,
        height: 24
    },
    buttonRemove: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    iconeRemove: {
        width: 32,
        height: 32
    }
})