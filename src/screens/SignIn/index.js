import React, { useState, useContext } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import { 
    Container,
    BoxLogin,
    ContainerBotoes,
    Botao,
    BotaoTexto,
    ButtonText,
    Input,
    InputTexto,
    Logo,
    ButtonComponent,
    ForgotPassword,
    CaixaTextoChamada,
    TextoChamada,
    TextoGrupou
 } from './styles';

 import logoImg from '../../../assets/logo.png';
 import { UsuarioContext } from '../../../contexts/user';
 

    const Login =  ({navigation}) => {

    const {signIn, signUp} = useContext(UsuarioContext);

    const [currentButton, setCurrentButton] = useState('aluno');
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);

    function handleSignIn(){
        try {
            signIn(email,senha);
        } catch (err) {
            console.warn(err);
        } 
    }

    function handleSignUp(){
        setCarregando(true);

        try {
            signUp(email,senha);
        } catch (err) {
            console.warn(err);
        }finally{
            setCarregando(false);
        }
    }

    return (
            <Container>
                <Logo>
                    <Image source={logoImg} style={{width: 300, height: 100}}/>
                </Logo>

                <CaixaTextoChamada>
                    <TextoChamada>
                        Problemas para formar
                    </TextoChamada>
                    <TextoChamada>
                        um grupo de trabalho
                    </TextoChamada>
                    <TextoChamada>
                        O <TextoGrupou>Grupou!</TextoGrupou> Resolve!
                    </TextoChamada>
                </CaixaTextoChamada>

            <BoxLogin>
                <ContainerBotoes>
                    <Botao onPress={ () => {
                        setCurrentButton('aluno')
                    }}
                    lastClick={currentButton == 'aluno' ? true : false }
                    >
                       <BotaoTexto
                       lastClick={currentButton == 'aluno' ? true : false }>Aluno</BotaoTexto>  
                    </Botao>
                    <Botao onPress={ () => {
                        setCurrentButton('professor')
                    }}
                    lastClick={currentButton == 'professor' ? true : false }
                    >
                       <BotaoTexto
                       lastClick={currentButton == 'professor' ? true : false }>Professor</BotaoTexto>  
                    </Botao>
                </ContainerBotoes>

                 <InputTexto>Email</InputTexto>
                <Input 
                placeholder='Informe seu Email'
                onChangeText={ text => setEmail(text)    
                
                }
                />

                 <InputTexto>Senha</InputTexto>
                <Input
                placeholder='Informe sua Senha'
                onChangeText={ text => setSenha(text)}
                secureTextEntry={true}
                 />
                <ForgotPassword onPress={() => {navigation.navigate('screenForget')}}>Esqueceu sua Senha?</ForgotPassword>
                

                <ContainerBotoes>
                    <ButtonComponent
                    onPress={()=>{ handleSignUp() }}
                    >
                        {carregando ? <ActivityIndicator color='#AE1B73' /> : 
                        <ButtonText>Cadastre-se</ButtonText> }
                    </ButtonComponent>
                    <ButtonComponent 
                    color2={true}
                    onPress={()=>{handleSignIn()}}
                    >
                        <ButtonText color1={true}>Entrar</ButtonText>
                    </ButtonComponent>
                </ContainerBotoes>
    
            </BoxLogin>
        </Container>
        
        
    );
}

export default Login;
