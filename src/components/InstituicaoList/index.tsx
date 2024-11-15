import { View, Text, FlatList } from "react-native"
import { useState } from "react";

import InstituicaoListItem from "../InstituicaoListItem";

interface InstituicaoListProps {
    onSwitchScreen: (screen: string, params?: any) => void;
}

export default function InstituicaoList({ onSwitchScreen }: InstituicaoListProps){

    const [instituicoes, setInstituicoes] = useState([
        {nome: 'Hospital Santa Maria', 
            tipo: 'A-', 
            brigada: 'ULS de Santa Maria',
            local: 'Hosp. Santa Maria, Antigos Correios, Rampa Central, 1ºAndar', 
            horario: '08:30 - 18:30',
            niveisNecessidade: {
                "A+": 2,
                "A-": 0,
                "B+": 5,
                "B-": 1,
                "O+": 4,
                "O-": 2,
                "AB+": 3,
                "AB-": 1
            }
        },
        {nome: 'Hospital São José', 
            tipo: 'O+', 
            brigada: 'ULS de São José',
            local: 'Hospital S. José, Rua Jose Antonio Serrano, Lisboa',
            horario: '08:30 - 19:00',
            niveisNecessidade: {
                "A+": 2,
                "A-": 3,
                "B+": 5,
                "B-": 3,
                "O+": 0,
                "O-": 2,
                "AB+": 3,
                "AB-": 1
            }
        },
        {nome: 'Hospital Fernando da Fonseca', 
            tipo: 'AB+', 
            brigada: 'ULS de Amadora/Sintra',
            local: 'Hospital Fernando da Fonseca - Amadora/Sintra',
            horario: '08:30 - 15:00',
            niveisNecessidade: {
                "A+": 2,
                "A-": 3,
                "B+": 5,
                "B-": 1,
                "O+": 4,
                "O-": 2,
                "AB+": 0,
                "AB-": 2
            }
        }
    ])

    return (
        <View>
            {/* <Text> Lista de instituições </Text> */}

            {/* Lista de Instituições */}
            <FlatList
            data={instituicoes}
            contentContainerStyle={{ gap: 2 }}
            renderItem={({ item }) => (
                <InstituicaoListItem
                instituicao={item}
                onSwitchScreen={(screen, params) => onSwitchScreen(screen, params)}
                />
            )}
            />
            
            
        </View>
    );
}