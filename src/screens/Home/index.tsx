import { TextInput, TouchableOpacity, View, Image, Text, FlatList, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Task } from "@/src/components/Task";
import { styles } from './styles';

export function Home() {
    const [tasks, setTasks] = useState<{concluido: boolean; name: string}[]>([]);
    const [taskName, setTaskName] = useState('');

    const [counterTasksCriadas, setCounterTasksCriadas] = useState(0);
    const [counterTasksConcluidas, setCounterTasksConcluidas] = useState(0);

    useEffect(() => {
        setCounterTasksCriadas(tasks.filter(item => item).length);
        setCounterTasksConcluidas(tasks.filter(item => item.concluido === true).length);
    }, [tasks]);



    function handleTaskAdd() {
        const searchTask = tasks.find((item) => item.name === taskName);
        if (searchTask) {
            return Alert.alert("Tarefa", "Já existe uma tarefa concluída com essa descrição!");
        }
        
        if (taskName.length < 3) {
          return Alert.alert("Tarefa", "A descrição da tarefa deve ter ao menos 3 caracteres!");
        }
        setTasks(prevState => [...prevState, {concluido: false, name: taskName}]);
        setTaskName('');
        
    }

    function handleTaskCheck(name: string, concluido: boolean) {
        if (tasks.filter(item => item.name === name && item.concluido === concluido)) {
            setTasks(prevState => prevState.filter(item => item.name !== name));
            setTasks(prevState => [...prevState, {concluido: !concluido, name: name}]);
        }
    }
    
    function handleTaskRemove(name: string) {
    
        Alert.alert("Remover", `Deseja remover a tarefa: \n ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(item => item.name !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image 
                    source={require('@/assets/rocket.png')}
                    style={styles.iconeRocket} 
                />
                <Text style={styles.logoTextTo}>to</Text>
                <Text style={styles.logoTextDo}>do</Text>
            </View>
            <View style={styles.newTaskContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#F2F2F2"
                    onChangeText={setTaskName}
                    value={taskName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}
                >
                    <Image 
                        source={require('@/assets/plus.png')} 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>

                <View style={styles.info}>
                    <View style={styles.infoTasksCriadas}>
                        <Text style={styles.infoTasksCriadasText}>Criadas</Text>
                        <Text style={styles.infoTasksCount}>{counterTasksCriadas}</Text>
                    </View>
                    <View style={styles.infoTasksConcluidas}>
                        <Text style={styles.infoTasksConcluidasText}>Concluídas</Text>
                        <Text style={styles.infoTasksCount}>{counterTasksConcluidas}</Text>
                    </View>
                </View>

                <FlatList 
                    data={tasks}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                    <Task 
                        key={item.name} 
                        name={item.name} 
                        concluido={item.concluido}
                        onCheck={() => handleTaskCheck(item.name, item.concluido)}
                        onRemove={() => handleTaskRemove(item.name)} 
                    />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                    <View style={styles.infoListEmpty}>
                        <Image 
                            source={require('@/assets/Clipboard.png')} 
                            style={styles.iconeClipboard}
                        />
                        <Text style={styles.listEmptyTitle}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptySubTitle}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                    )}
                />
            </View>
        </View>
    );
}