import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
    },
    topContainer: {
        flexDirection: 'row',
        paddingTop: 50,
        width: '100%',
        height: '20%',
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    newTaskContainer: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        backgroundColor: '#1E1E1E',
        paddingLeft: 20,
        paddingRight: 20
        
    },
    bottomContainer: {
        width: '100%',
        height: '70%',
        backgroundColor: '#1E1E1E',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconeRocket: {
        width: 20,
        height: 30,
        marginRight: 8
    },
    logoTextTo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1E6F9F'
    },
    logoTextDo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5E60CE'
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        color: '#FFF',
        borderRadius: 6,
        fontSize: 16,
        padding: 16,
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 36,
        marginBottom: 20,
    },
    infoTasksCriadas: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    infoTasksConcluidas: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    infoTasksCriadasText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EA8DE',
    },
    infoTasksConcluidasText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#5E60CE',
    },
    infoTasksCount: {
        width: 40,
        height: 35,
        backgroundColor: '#333333',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 999,
        padding: 8,
    },
    infoListEmpty: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconeClipboard: {
        marginTop: 20,
        marginBottom: 20
    },
    listEmptyTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    listEmptySubTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
    }
})