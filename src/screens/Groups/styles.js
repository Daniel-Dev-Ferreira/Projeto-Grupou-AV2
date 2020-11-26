import style from 'styled-components/native';

export const Container = style.View`
    flex: 1;
    justify-content: flex-start;
    align-Items: flex-start;
    background-color: #6495ED;
`;
export const ContainerTitulo = style.View`
    flex-direction: row;
    justify-content: center;
    align-Items: flex-start;
    background-color: #6495ED;
`;

export const ContainerItens = style.View`
    
    flex-direction: row;
    height: 50px;
    width: 100%;
    margin: 10px;
    border-bottom-width: 1px;
    border-color: white;
    align-Items: flex-start;
    
`;

export const ImageIcon2 = style.Image`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    shadow-color: gray;
    display: flex;
    padding-bottom: 5px;
`;

export const GroupText = style.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-horizontal: 10px;
    margin-top: 18px;
`;

export const Text = style.Text`
    color: white;
    flex: 3;
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 10px;
`;

export const ButtonWithBackground = style.TouchableOpacity`
    display: flex;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    flex: 1;
`;

export const ImageIcon = style.Image`
    padding: 10px;
    margin: 5px;
    height: 45px;
    width: 45px;
    resizeMode: stretch;
`;