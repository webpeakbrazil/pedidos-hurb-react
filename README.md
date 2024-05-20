# Guia de Submissão de Nova Extensão para Zoho Desk

Este guia detalha os passos necessários para subir uma nova extensão para Zoho Desk. Siga os passos abaixo para garantir uma submissão bem-sucedida.

## Passo 1: Edição do arquivo "widget.html"

1. Localize o arquivo **"widget.html"** na pasta **"app"** do seu projeto.
2. Edite o arquivo com o código necessário para modificar o contato associado ao ticket.

## Passo 2: Edição do arquivo "plugin-manifest.json"

1. Acesse o arquivo **"plugin-manifest.json"**.
2. Insira as informações de localização da extensão, nome, conexões e outras informações relevantes.

## Passo 3: Validação do código

1. Abra o terminal.
2. Navegue até a pasta do projeto.
3. Execute o comando `zet validate` para validar todo o código.

## Passo 4: Empacotamento do código

1. Após a validação bem-sucedida, execute o comando `zet pack` no terminal.
2. Isso criará um arquivo zip do código, localizado na pasta **"dist"**.

## Passo 5: Criação da Extensão no Sigma

1. Acesse a página do Sigma.
2. Crie uma nova extensão, fornecendo um nome descritivo.
3. Selecione o serviço **Zoho Desk**.
4. Faça o upload do arquivo zip criado anteriormente.

## Passo 6: Criação de uma Nova Conexão Zoho OAuth

1. Crie uma nova conexão Zoho OAuth.
2. Adicione os escopos necessários, como **Desk.tickets.ALL**, **Desk.contacts.ALL**, e outros conforme necessário.

## Passo 7: Publicação da Extensão

1. Após configurar a extensão, publique-a.
2. Defina a extensão como privada.
3. No link de instalação gerado, conceda as permissões solicitadas.

## Passo 8: Verificação e Atualização

1. Acesse um ticket no Zoho Desk para verificar se a extensão está funcionando corretamente.
2. Para ajustes adicionais, repita os passos necessários, incluindo a criação de um novo zip, a publicação e a atualização da extensão no Zoho Desk.

Para mais informações detalhadas, consulte a [documentação oficial do Zoho Desk Extensions](https://www.zoho.com/desk/extensions/guide/extensions.html).

Este guia fornece uma visão geral dos passos necessários. Certifique-se de consultar a documentação oficial para obter informações detalhadas sobre cada etapa do processo de submissão da extensão.
