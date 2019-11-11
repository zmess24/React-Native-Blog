import React, { useContext } from 'react';
import { View, Text, Stylesheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

export default IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>                    
                }}
            />
        </View>
    )
};