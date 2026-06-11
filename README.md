# 🌿 Igreja Decor — Site / Portfólio

Landing page de portfólio para decoração floral de casamentos e eventos,
com painel admin para a dona adicionar as próprias fotos sem mexer em código.

## Como abrir

Abra o arquivo `index.html` em qualquer navegador. Pronto — funciona offline,
sem servidor e sem instalação.

## Como configurar (antes de publicar)

Edite o arquivo **`js/config.js`**:

| Campo | O que é |
|---|---|
| `senha` | Senha do painel admin (troque "igreja123"!) |
| `whatsapp` | Número com DDI+DDD, sem espaços (ex: `5511999998888`) |
| `instagram` | Usuário do Instagram, sem o `@` |
| `mensagemWhatsApp` | Mensagem que chega pré-escrita no WhatsApp |

## Como a dona adiciona fotos

1. Role até o rodapé e clique em **"Área da Igreja Decor"**
2. Digite a senha
3. Na barra verde que aparece embaixo, clique em **"Adicionar fotos"**
4. Escolha as fotos (ou arraste), selecione a categoria, dê um título e salve
5. As fotos aparecem na hora no portfólio — as 3 mais recentes viram destaque no topo
6. Para excluir: no modo admin, cada foto tem um botão 🗑

As fotos são comprimidas automaticamente e salvas no navegador (localStorage).

> ⚠️ **Importante:** com localStorage, as fotos só existem no navegador onde foram
> adicionadas. Para que apareçam para todos os visitantes do site publicado, o
> próximo passo é migrar o `js/storage.js` para Firebase ou Supabase (a estrutura
> já está pronta para isso — basta trocar a implementação das 3 funções).

## Como publicar de graça

- **Netlify Drop:** arraste a pasta inteira em https://app.netlify.com/drop
- **GitHub Pages:** suba para um repositório → Settings → Pages → Source: main
- **Vercel:** importe o repositório em https://vercel.com

Domínio próprio (opcional): registre `igrejadecor.com.br` (~R$40/ano) e aponte
para a hospedagem.

## Estrutura do projeto

```
igreja-decor/
├── index.html        Página principal
├── css/              Estilos divididos por seção
├── js/               Lógica dividida em módulos
│   ├── config.js     ← Configurações editáveis
│   ├── storage.js    ← Camada de dados (trocar p/ Firebase no futuro)
│   └── ...
└── assets/images/    Logo, ícones e imagens
```
