import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from './styles';

type Props = {
    name: string;
    concluido: boolean;
    onCheck: () => void;
    onRemove: () => void;
}

export function Task({ name, concluido, onCheck, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonCheck}
                onPress={onCheck}
            >
                <Image 
                    source={concluido === true ? require('@/assets/checked.png') : require('@/assets/check.png')} 
                    style={styles.iconeCheck}
                />
            </TouchableOpacity>
            <Text style={concluido === true ? styles.nameDecoration : styles.name}>
                {name}
            </Text>
            <TouchableOpacity 
                style={styles.buttonRemove}
                onPress={onRemove}
            >
                <Image 
                    source={require('@/assets/trash.png')} 
                    style={styles.iconeRemove}
                />
            </TouchableOpacity>
        </View>

    )
}