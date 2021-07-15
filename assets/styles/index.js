import {
    StyleSheet,
} from 'react-native';
import colors from '../colors/colors';

const STYLES = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    inputIcon: {
        marginTop: 15,
        position: 'absolute',
    },
    input: {
        color: colors.light,
        paddingLeft: 30,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18
    },
    btnPrimary: {
        backgroundColor: colors.primary,
        height: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    line: {
        height: 1,
        width: 35,
        backgroundColor: colors.light,
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
      },
      btnImage: {width: 20, height: 20, marginLeft: 5},
});

export default STYLES;