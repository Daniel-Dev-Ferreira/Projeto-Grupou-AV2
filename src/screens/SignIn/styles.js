import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #6495ED;
    flex: 1;
    padding: 10px 20px 5px 20px;
    justify-content: flex-end;
`;

export const BoxLogin = styled.View`
    height: 385px;
    width: 100%;
    background-color: white;
    padding: 5px;
    border-radius: 25px;
`;

export const ContainerBotoes = styled.View`
    flex-direction: row;
`;

export const Botao = styled.TouchableOpacity`
    border-bottom-width: 4px;
    border-bottom-color:${props => props.lastClick ? "#AE1B73" : "#fff"};
    height: 60px;
    margin: 0px 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const BotaoTexto = styled.Text`
    font-size: 20px;
    color:${props => props.lastClick ? "#673f66" : "#ccc"};
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    color:${props => props.color1 ? "white" : "black"};
`;

export const Input = styled.TextInput`
    border: 1px solid #ccc;
    height: 55px;
    margin-top: 5px;
    border-radius: 5px;
    padding: 0 20px;
`;

export const InputTexto = styled.Text`
    margin-top: 20px;
    color: #b4b8c6;
`;

export const Titulo = styled.Text`
    color: white;
    font-size: 15px;
`;

export const Logo = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`;

export const ButtonComponent = styled.TouchableOpacity`
    height: 50px;
    margin: 25px 5px 10px 5px;
    border: 1px solid black;
    border-radius: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color:${props => props.color2 ? "#AB1B71" : "white"};

`;

export const ForgotPassword = styled.Text`
    font-size: 15px;
    text-align: right;
    margin-top: 10px;

`;

export const CaixaTextoChamada = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

export const TextoChamada = styled.Text`
    color: white;
    font-size: 20px;
    text-align: center;


`;

export const TextoGrupou = styled.Text`
    font-weight: bold;

`;

