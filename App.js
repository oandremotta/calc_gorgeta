import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`;

const HeaderTest = styled.Text`
  font-size: 24px;
  color: black;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #eee;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea = styled.View`
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.Button``;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  useEffect(() => {
    calc();
  }, [pct]);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip((pct / 100) * nBill);
    } else {
      alert('Digite o valor da conta');
    }
  };
  return (
    <Page>
      <HeaderTest>Calculadora de gorgeta</HeaderTest>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={(n) => setBill(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)}></PctItem>
        <PctItem title="10%" onPress={() => setPct(10)}></PctItem>
        <PctItem title="15%" onPress={() => setPct(15)}></PctItem>
        <PctItem title="20%" onPress={() => setPct(20)}></PctItem>
      </PctArea>
      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da conta:</ResultItemTitle>
          <ResultItem>R${parseFloat(bill).toFixed(2)}</ResultItem>
          <ResultItemTitle>Valor da gorgeta: ({pct}%)</ResultItemTitle>
          <ResultItem>R${tip.toFixed(2)}</ResultItem>
          <ResultItemTitle>Valor total:</ResultItemTitle>
          <ResultItem>R${(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
