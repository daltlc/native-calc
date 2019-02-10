import { StyleSheet } from 'react-native';

let Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#32255D'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#A8D299'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row',
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#32255D',
        justifyContent: 'center'
        
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButtonHighlighted: {
        backgroundColor: 'black'
    },
 }
)

export default Style;