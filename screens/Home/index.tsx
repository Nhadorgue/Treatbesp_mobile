import React from "react";
import { 
    Container, 
    Header, 
    TituloHeader,
    Logo,
    Apresentacao,
    Para
} from "./style";


export default function Home(){
    return (
        <Container>
            <Header>
                <TituloHeader>Treatbesp</TituloHeader>
            </Header>

            <Apresentacao>
                O Treatbesp nasceu com o objetivo de dar informações detalhadas de forma mais eficaz para o usuário. Vale ressaltar que esses dados telemétricos e pluviométricos estão vindo diretamente da Companhia de Saneamento Básico do Estado de São Paulo - Sabesp
            </Apresentacao>
                
            <Para>Escolha o sistema que verificaremos para você:</Para>

        </Container>

    )
}