import { Input } from "@ui-kitten/components";
import React, { useState } from "react";
import { FlatList } from "react-native";
import Item from "./Item";



export default function HomeScreen() {

    const [list, setList] = useState(nomes);

    const onSearch = (text) => {
        setList(
            nomes.filter((item) =>
                item.nome.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                item.descricao.toLowerCase().indexOf(text.toLowerCase()) > -1)
        )
    }

    return <>
        <Input
            placeholder='Pesquise aqui'
            onChangeText={(text) => onSearch(text)}

        />
        <FlatList
            data={list}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
};






const nomes = [
    {
        id: 1,
        nome: "Zeca",
        descricao: "Desenvolvedor Front-end",
    },
    {
        id: 2,
        nome: "Micael",
        descricao: "Futuro javeiro",
    },
    {
        id: 3,
        nome: "Davi Pires",
        descricao: "Desenvolvedor Web",
    },
    {
        id: 4,
        nome: "Otiliano",
        descricao: "Scrapping Develop",
    },
    {
        id: 5,
        nome: "Vinicius",
        descricao: "Desenvolvedor de mobile",
    },
    {
        id: 6,
        nome: "Zeca",
        descricao: "Desenvolvedor Front-end",
    },
    {
        id: 7,
        nome: "Micael",
        descricao: "Futuro javeiro",
    },
    {
        id: 8,
        nome: "Davi Pires",
        descricao: "Desenvolvedor Web",
    },
    {
        id: 9,
        nome: "Otiliano",
        descricao: "Scrapping Develop",
    },
    {
        id: 10,
        nome: "Vinicius",
        descricao: "Desenvolvedor de mobile",
    }
];
