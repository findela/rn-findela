import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavigation from './TopNavigation'
import { ListItem,Input,SearchBar } from 'react-native-elements';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            propsData : {
                navigation: "message",
                image : this.props.image,
                text : this.props.text
            }
        }
    }

    updateSearch = search => {
        this.setState({ search }, () => {
            console.log(this.state.search);
        });
    };

    render() {
        const { search } = this.state.search;
        return (
            <SafeAreaView style={{height: '100%', backgroundColor: '#FFF'}}>
                <TopNavigation currentScreen={this.state.propsData}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    padding: 10,
                    top: -60,
                    overflow: 'hidden',
                    backgroundColor: '#F5F5F5'
                }}>
                    <ListItem
                        containerStyle={{ paddingRight: 20, padding: 10, marginBottom: 10, backgroundColor: '#FEEDEC', borderTopRightRadius: 30, borderBottomRightRadius: 30}}
                        title={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        titleStyle={{fontSize: 15, color: '#000'}}
                        subtitle={'just now'}
                    />

                    <ListItem
                        containerStyle={{paddingLeft: 20, marginBottom: 10, backgroundColor: '#FEF8E8', borderTopLeftRadius: 30, borderBottomLeftRadius: 30}}
                        titleStyle={{fontSize: 15, color: '#000'}}
                        title={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        subtitle={'just now'}
                    />
                </ScrollView>
                <View style={{ display:'flex',flexDirection: 'row', position: 'absolute', bottom: 0}}>
                    <SearchBar
                        lightTheme
                        searchIcon={{
                            name: 'paper-plane',
                            type:'font-awesome',
                            color:'#F64037',
                            iconStyle: {
                            }
                        }}
                        showLoading={true}
                        containerStyle={{width: '100%'}}
                        inputContainerStyle={{backgroundColor: '#fff',padding: 5}}
                        placeholder="Type to send"
                        onPress={() => alert("onPress")}
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default Message
