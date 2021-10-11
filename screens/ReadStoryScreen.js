 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Read Story</Text>
                <Text style={styles.text}>One day, a fox became very hungry as he went to search for some food. He searched high and low, but couldn’t find something that he could eat.

Finally, as his stomach rumbled, he stumbled upon a farmer’s wall. At the top of the wall, he saw the biggest, juiciest grapes he’d ever seen. They had a rich, purple color, telling the fox they were ready to be eaten.

To reach the grapes, the fox had to jump high in the air. As he jumped, he opened his mouth to catch the grapes, but he missed. The fox tried again but missed yet again.

He tried a few more times but kept failing.

Finally, the fox decided it was time to give up and go home. While he walked away, he muttered, “I’m sure the grapes were sour anyway.”
</Text>

            </View>
                


           
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'coral',
    fontSize:30,
  },

});