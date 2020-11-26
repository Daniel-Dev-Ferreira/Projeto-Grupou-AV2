import React, {useContext} from 'react';
import { View, Text } from 'react-native';

import {
    Container,
    Texto,
    ContainerBotoes,
    ButtonComponent,
    ButtonText
} from './styles';

import {UsuarioContext} from '../../../contexts/user';

const Settings = () => {

    const { signOut } = useContext(UsuarioContext)

    return (
        <Container>
            <ContainerBotoes>
                    <ButtonComponent onPress= { () => { signOut() }}>
                        <ButtonText>Sair</ButtonText> 
                    </ButtonComponent>
                </ContainerBotoes>
        </Container>
    );

}

export default Settings;