import React from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView, Linking } from 'react-native'
// import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

const Details = () => {

    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    function handleWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=81988391018`)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack} style={styles.buttomBack}>
                    <Icon name="log-out" size={20} color="#34cb79" />
                </TouchableOpacity>
                <Image style={styles.pointImage} source={{ uri: 'https://www.dsop.com.br/wp-content/uploads/2017/06/educacao-financeira-supermercado-como-economizar-compras.jpg' }}></Image>
                <Text style={styles.pointName}>Mercado do Pedro</Text>
                <Text style={styles.pointItems}>Lâmpadas, e óleo de Cozinha</Text>
                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço</Text>
                    <Text style={styles.addressContent}>Pernambuco, Recife</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleWhatsapp}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => { }}>
                    <Icon name="mail" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20,
    },

    buttomBack: {
        alignSelf: 'flex-start',
        transform: [{ rotateY: '180deg' }],
        padding: 4,
    },

    pointImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 32,
    },

    pointName: {
        color: '#322153',
        fontSize: 28,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
    },

    pointItems: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80'
    },

    address: {
        marginTop: 32,
    },

    addressTitle: {
        color: '#322153',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },

    addressContent: {
        fontFamily: 'Roboto_400Regular',
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80'
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        width: '48%',
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
    },
});

export default Details