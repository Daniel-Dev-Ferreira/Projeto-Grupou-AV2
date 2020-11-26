import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #6495ED;
    flex: 1;
    padding: 10px 20px 5px 20px;
    justify-content: center;
    align-items: center;
`;

export const Texto = styled.Text`
    font-size: 30px;
    color: white;
`;

export const ContainerBotoes = styled.View`
    flex-direction: row;
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

export const ButtonText = styled.Text`
    font-size: 20px;
    color:${props => props.color1 ? "white" : "black"};
`;





