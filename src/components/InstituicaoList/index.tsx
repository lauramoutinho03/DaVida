import { View, Text, FlatList } from "react-native"
import { useState } from "react";

import InstituicaoListItem from "../InstituicaoListItem";

export default function InstituicaoList(){

    const [instituicoes, setInstituicoes] = useState([
        {nome: 'HOSPITAL SANTA MARIA', tipo: 'A-'},
        {nome: 'HOSPITAL SÃO JOSÉ', tipo: 'O+'}
    ])

    return (
        <View>
            {/* <Text> Lista de instituições </Text> */}

            {/* Lista de Instituições */}
            <FlatList 
                data={instituicoes}
                contentContainerStyle={{ gap: 2 }}
                renderItem={({ item }) => (
                    <InstituicaoListItem instituicao={item}/>
                )}
            />
            
            
        </View>
    );
}