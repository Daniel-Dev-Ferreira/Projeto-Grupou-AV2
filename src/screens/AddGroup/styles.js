import style from 'styled-components/native';

export const Container = style.View`
    flex: 1;
    justify-content: center;
    align-Items: center;
    background-color: #6495ED;
`;

export const Text = style.Text`
    color: #101010;
    font-size: 24px;
    font-weight: bold;
`;

export const Input = style.TextInput`
    border: 1px solid #ccc;
    height: 55px;
    margin-top: 5px;
    border-radius: 5px;
    width: 75%;
    background-color: white;
    padding: 0 20px;
`;

export const InputTexto = style.Text`
    margin-top: 20px;
    color: black;
    font-size: 20px;
    margin-left: 50px;
    alignSelf: flex-start;
`;

export const ContainerBotoes = style.View`
    flex-direction: row;
`;

export const ButtonComponent = style.TouchableOpacity`
    height: 50px;
    margin: 25px 5px 10px 5px;
    border: 1px solid black;
    border-radius: 5px;
    width: 75%;
    justify-content: center;
    align-items: center;
    background-color: green;

`;

export const ButtonText = style.Text`
    font-size: 20px;
    color: white;
`;
