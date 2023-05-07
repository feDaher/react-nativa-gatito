import React from 'react';

import { SafeAreaView, Text } from 'react-native' //usar a StatusBar, para andriod, caso precise.

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.90,
    descricao: "NAO DE BANHO NO SEU GATO! Mas se precisar nos damos"
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.90,
    descricao: "Uma dose de vacina V4. Seu gato precisa de duas."
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 90.90,
    descricao: 'Uma dose da vica antirrábica. Seu gato precisa de uma por ano.'
  }
]

export default function Servicos() {
  return <SafeAreaView>
      <Text>Servicos!</Text>
  </SafeAreaView>
}
