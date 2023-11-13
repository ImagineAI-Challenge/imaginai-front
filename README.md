<div align="center">
    <img src="src/Assets/logo.png" alt="modelo logico do banco de dados">
</div>

   Bem-vindo ao projeto ImaginAI, um aplicativo que visa estimular a criatividade e a imaginação dos usuários por meio de criação de histórias interativas com uma inteligência artificial. O objetivo é proporcionar uma experiência envolvente de criação de histórias de RPG, combinando as capacidades do GPT para auxiliar na elaboração das narrativas e do Stable Diffusion para gerar imagens ilustrativas que aprimorem a imersão dos usuários.
   
   Nossa iniciativa tem como propósito promover a realização de atividades criativas e lúdicas, incentivando o bem-estar individual e a expressão da imaginação, sem comprometer a capacidade das gerações futuras de se envolverem em atividades similares. Inicialmente, elaboramos um documento abrangente que descreve a visão completa do projeto, com a intenção de transformar essa visão em realidade nas próximas etapas de desenvolvimento.
   
   Essa visão envolve a criação de uma IA que não apenas auxilia na criação de histórias de RPG, mas também proporciona uma experiência aprimorada de imersão e imaginação por meio de imagens ilustrativas geradas de forma autônoma.


<br>

<div align="center">
    <h1>PROJETO AINDA EM DESENVOLVIMENTO</h1>
</div>

<br>

### Sumário
1. [URLs relevantes](#URLs-relevantes)
2. [Ambiente de desenvolvimento](#Ambiente-de-desenvolvimento)
   2.1. [Troubleshooting](#Troubleshooting)
3. [Instalação do projeto](#Instalacao-do-projeto)
4. [Iniciar aplicativo](#Iniciar-aplicativo)
   4.1. [Instruções de uso](#Instruções-de-uso)


## URLs relevantes
- *[Vídeo de explicação do projeto em geral](https://www.youtube.com/watch?v=wf3xPOcDF8E)*
- *[API de comunicação](https://github.com/ImagineAI-Challenge/imaginai-api-comunicacao)*
- *[Projeto de IA geradora de mapas](https://github.com/ImagineAI-Challenge/imaginai-api-MagGen-IA-App)*

## Ambiente de desenvolvimento

>**OBSERVAÇÃO**: Veja a documentação oficial *[React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)* para definir e configurar corretamente o seu ambiente de desenvolvimento.

## Troubleshooting

Caso lhe ocorra algum problema na configuração do seu ambiente, veja nessa página *[Troubleshooting](https://reactnative.dev/docs/troubleshooting)*.

## Instalação do projeto

Após configurar o seu ambiente de desenvolvimento para rodar o react-native, instale o projeto pelo meio convencional ou por algum terminal. Primeiramente se direcione ao local desejado e rode o seguinte comando:
```
git clone https://github.com/ImagineAI-Challenge/imaginai-front
```
Feito isso, abra o seu editor, recomenda-se o *[Visual Studio Code](https://code.visualstudio.com/Download)*, e selecione o projeto front-end do ImaginAI. Ao abrir, navegue até a pasta `/src/Components/ApiService.js` e edite o campo "seu-ip" `const ip = 'seu-ip';` para o seu ip da máquina. Para verificar o seu ip, acesse um terminal ou, se estiver no Windows, o CMD.

Nele digite o código:
```
ipconfig
```
Copie e cole o seu IPV4 e substitua no campo mencionado acima. **Não esqueça de salvar as mudanças!**

Abra o seu emulador mobile Android Studio (preferencialmente) e um terminal no diretório do projeto já baixado e rode os seguintes comandos:
```
npm install
```
Esse comando vai instalar todas as dependências usadas no projeto

## Iniciar o aplicativo

Depois de esperar a instalação dos node_modules, digite, ainda no terminal a fim de iniciar o projeto no seu emulador android:
```
npx react-native start
```
Logo em seguida, mostrará na tela as seguintes opções:
```
r - reload the app
d - open developer menu
i - run on IOS
a - run on Android
```
Aperte a tecla "a" para abrir no Android.
**Pronto**, a sua aplicação agora está aberta. Para conseguir usar em totalidade o aplicativo, precisará baixar a *[API de comunicação](https://github.com/ImagineAI-Challenge/imaginai-api-comunicacao)*, lá terá o passo a passo de como usá-la.

## Instruções de uso

O aplicativo é bem intuitivo, consta uma tela inicial com a logo do projeto onde há duas opções de 
