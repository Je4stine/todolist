import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Homepage from './Componets/Homepages';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddtask = () =>{
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const handleDelete = (index) =>{
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.todotext}>
            <Text style={{fontSize:35, fontWeight: 'bold',}}>Things to do</Text>
    </View>
    {
      taskItems.map((item, index)=>{
        return (
        <TouchableOpacity key={index} onPress={()=> handleDelete(index)}> 
        <Homepage  text={item}/>
        </TouchableOpacity>
        )
      })
    }

      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Write something"
            onChangeText={(text) => setTask(text)}
            value={task}
            />
        <TouchableOpacity style={styles.button}
        onPress={() => handleAddtask()}
        >
        <Text style={{fontSize:30}}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  todotext: {
    marginTop: 20,
    marginLeft: 20,
},
input: {
  width: '80%',
  height: 50,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#D3D3D3',
  borderRadius: 30,
  padding: 12,
  marginLeft: 10,
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: 20,
},
button: {
  height: 50,
  width: 50,
  backgroundColor: '#fff',
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
},

});
