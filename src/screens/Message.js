import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopNavigation from '../components/TopNavigation'
import { ListItem,SearchBar,Button } from 'react-native-elements';

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
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    onSaveMessageData = () => {
        this.setState({ search : '' });
    };

    render() {
        const { search } = this.state;
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
                        containerStyle={{
                            backgroundColor: '#FEEDEC',
                            shadowRadius: 2,
                            elevation: 2,
                            padding: 10,
                            paddingRight: 20,
                            marginBottom: 15,
                            borderTopRightRadius: 30,
                            shadowOffset: { width: 0, height: 1 },
                            borderBottomRightRadius: 30
                        }}
                        title={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        titleStyle={{fontSize: 15, color: '#000'}}
                        subtitle={'just now'}
                    />

                    <ListItem
                        containerStyle={{
                            backgroundColor: '#FEF8E8',
                            borderTopLeftRadius: 30,
                            borderBottomLeftRadius: 30,
                            shadowOffset: { width: 0, height: 1 },
                            shadowRadius: 50,
                            elevation: 2,
                            padding: 10,
                            paddingLeft: 20,
                            marginBottom: 15,
                        }}
                        titleStyle={{fontSize: 15, color: '#000'}}
                        title={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        subtitle={'just now'}
                    />
                </ScrollView>
                <View style={{ display:'flex',flexDirection: 'row', position: 'absolute', bottom: 0}}>
                    <SearchBar
                        lightTheme
                        searchIcon={{
                            name: 'comments',
                            type:'font-awesome',
                            size: 30,
                            color:'#CED4DA',
                        }}
                        showLoading={true}
                        containerStyle={{width: '85%',height: 70,padding: 0}}
                        inputContainerStyle={{backgroundColor: '#fff', padding: 10,}}
                        placeholder="Type to send"
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <Button onPress={ this.onSaveMessageData } type="clear"
                            containerStyle={{backgroundColor: '#F64037', paddingTop: 15, width:'15%'}}
                            icon={
                                <Icon name= 'paper-plane' type = 'font-awesome' color ='#fff' size={25}/>
                            }
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default Message
