import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/home";
import Login from "./screens/login/loginpage";
import Cadastro from "./screens/cadastro/cadastropage";
import Homepage from "./screens/telainicial/homepage"
import Perfil from "./screens/Perfil/perfil";
import Concursos from "./screens/Concursos/concurso";
import Vestibular from "./screens/Vestibular/vertibular";
import certificados from "./screens/Certificados/certificados";
import Educacao from "./screens/Certificados/Educação e idiomas";
import Gestao from './screens/Certificados/GestaoNegocios/Gestao';
import Qualidade from "./screens/Certificados/Qualidade e Processos/qualidade";
import Saude from "./screens/Certificados/Saúde e Segurança/Saude";
import Sustentabilidade from "./screens/Certificados/Sustentabilidade/Sustentabilidade";
import Tecnologia from './screens/Certificados/Tecnologia/tecnologia';
import NavegaEnem from './screens/Certificados/Educação e idiomas/Enem/test'
import NavegaToefl from "./screens/Certificados/Educação e idiomas/Toefl/Toefl";
import NavegaDele from './screens/Certificados/Educação e idiomas/dele/Dele'
import NavegaDalf from "./screens/Certificados/Educação e idiomas/Dalf/Dalf";
import Microsoft from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/Container2";
import navegaMS_900 from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/MS_900/MS_900";
import navegaPL_900 from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/PL_900/PL_900";
import navegaDP_900 from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/DP_900/DP_900";
import navegaAi_900 from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/AI_900/AI_900";
import navegaAZ_900 from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/AZ_900/AZ_900";
import navegaSC_900 from "./screens/Certificados/Tecnologia/CertificadosMicrosoft/SC_900/SC_900";
import NavegaISO_9001 from "./screens/Certificados/Qualidade e Processos/ISO_9001/ISO_9001";
import NavegaISO_14001 from "./screens/Certificados/Qualidade e Processos/ISO_14001/ISO_14001";
import NavegaLean_Six_Sigma from "./screens/Certificados/Qualidade e Processos/Lean_Six_Sigma/Lean_Six_Sigma";
import NavegaLEED from "./screens/Certificados/Sustentabilidade/LEED/LEED";
import NavegaFSC from "./screens/Certificados/Sustentabilidade/Certificado_FSC/Certificado_FSC";
import NavegaNR10 from "./screens/Certificados/Saúde e Segurança/NR_10/NR_10";
import NavegaNR12 from "./screens/Certificados/Saúde e Segurança/NR_12/NR_12";
import NavegaNR35 from "./screens/Certificados/Saúde e Segurança/NR_35/NR_35";
import NavegaBLS_ACLS from "./screens/Certificados/Saúde e Segurança/BLS_ACLS/BLS_ACLS";
import NavegaCPA10 from "./screens/Certificados/GestaoNegocios/CPA_10/CPA_10";
import NavegaCPA20 from "./screens/Certificados/GestaoNegocios/CPA_20/CPA_20";
import NavegaCFP from "./screens/Certificados/GestaoNegocios/CFP/CFP";
import NavegaPMP from "./screens/Certificados/GestaoNegocios/PMP/PMP";
import navegaEnem2 from "./screens/Vestibular/enem/enem";
import NavegaForm from "./screens/formularioprovas/FormularioProva";


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}

      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Concursos"
        component={Concursos}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Vestibular"
        component={Vestibular}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Certificados"
        component={certificados}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Educacao"
        component={Educacao}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Gestao"
        component={Gestao}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Qualidade"
        component={Qualidade}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Saude"
        component={Saude}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Sustentabilidade"
        component={Sustentabilidade}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Tecnologia'
        component={Tecnologia}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='NavegaEnem'
        component={NavegaEnem}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='navegaToefl'
        component={NavegaToefl}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='NavegaDele'
        component={NavegaDele}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='NavegaDalf'
        component={NavegaDalf}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='Microsoft'
        component={Microsoft}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='MS_900'
        component={navegaMS_900}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='PL_900'
        component={navegaPL_900}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='DP_900'
        component={navegaDP_900}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='AI_900'
        component={navegaAi_900}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='AZ_900'
        component={navegaAZ_900}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='SC_900'
        component={navegaSC_900}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='ISO_9001'
        component={NavegaISO_9001}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='ISO_14001'
        component={NavegaISO_14001}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='Lean_Six_Sigma'
        component={NavegaLean_Six_Sigma}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='LEED'
        component={NavegaLEED}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='FSC'
        component={NavegaFSC}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='NR10'
        component={NavegaNR10}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="NR12"
        component={NavegaNR12}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='NR35'
        component={NavegaNR35}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="BLS_ACLS"
        component={NavegaBLS_ACLS}
        options={{ headerShown: false }} />

      <Stack.Screen
        name='CPA10'
        component={NavegaCPA10}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="PMP"
        component={NavegaPMP}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="CPA20"
        component={NavegaCPA20}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="CFP"
        component={NavegaCFP}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="enem2"
        component={navegaEnem2}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="FormularioProva"
        component={NavegaForm}
        options={{ headerShown: false }} />




    </Stack.Navigator>
  )
}