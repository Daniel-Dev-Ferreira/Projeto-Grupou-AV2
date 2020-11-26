import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #6495ED;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
   
`;

export const ContainerMessager = styled.ScrollView`
    flex: 1;
    background-color: #fff;
    width: 100%;
    border: 2px solid teal;
`;


export const Messager = styled.Text`
    margin: 0 auto; 
    background: #7e57c2;
    font-size: 18px;
    line-height: 5px;  
    border-radius: 15px;
    width: 300px;
    height: auto;
    color: #fff;
    padding: 15px;
    position: relative;
    margin-top: 10px;
    justify-content: center;
    
`;

export const Texto = styled.Text`
    font-size: 12px;
    color: yellow;
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
    background-color: #218838;

`;

export const ButtonText = styled.Text`
    font-size: 20px;
    color: white;
`;

export const Input = styled.TextInput`
    border: 1px solid #ccc;
    height: 50px;
    margin-top: 25px;
    padding: 5px;
    flex: 3;
    border-radius: 5px;
    padding: 0 20px;
    background-color: #e6e6e6;
`;







