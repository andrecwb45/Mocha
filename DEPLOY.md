# 🚀 Guia Completo de Deploy

Este guia explica como fazer o deploy do seu portfolio no Netlify de forma detalhada.

## 📦 Preparação do Projeto

### 1. Download do Projeto

Se você ainda não tem o projeto localmente:

```bash
# Clone o repositório (se já estiver no GitHub)
git clone https://github.com/seu-usuario/andrefelipe.git
cd andrefelipe
```

### 2. Estrutura Necessária

Certifique-se de que seu projeto tem estes arquivos:
- ✅ `index.html` (página principal)
- ✅ `public/app.js` (JavaScript)
- ✅ `public/styles.css` (estilos)
- ✅ `netlify.toml` (configuração)

## 🌐 Deploy no Netlify

### Método 1: GitHub + Netlify (Recomendado)

Este é o método mais profissional e permite atualizações automáticas.

#### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository"
3. Nome do repositório: `andrefelipe` (ou outro nome)
4. Deixe público ou privado (sua escolha)
5. NÃO inicialize com README
6. Clique em "Create repository"

#### Passo 2: Enviar Código para GitHub

No terminal, dentro da pasta do projeto:

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "Initial commit - Portfolio Vibe Coder"

# Conectar ao repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/andrefelipe.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

#### Passo 3: Conectar GitHub ao Netlify

1. Acesse [Netlify](https://netlify.com) e faça login
2. Clique em "Add new site" > "Import an existing project"
3. Escolha "GitHub"
4. Autorize o Netlify a acessar seu GitHub
5. Selecione o repositório `andrefelipe`
6. Configure o deploy:
   - **Branch to deploy**: `main`
   - **Build command**: deixe vazio
   - **Publish directory**: `.`
7. Clique em "Deploy site"

#### Passo 4: Configurar Domínio (Opcional)

1. No dashboard do Netlify, vá em "Site settings"
2. Clique em "Change site name"
3. Escolha um nome: `andrefelipe-portfolio` (ou outro)
4. Seu site estará em: `https://andrefelipe-portfolio.netlify.app`

Para domínio customizado:
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: `andrefelipe.dev`)
4. Siga as instruções para configurar DNS

### Método 2: Netlify CLI

Perfeito para deploys rápidos e testes.

#### Instalação

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli
```

#### Deploy

```bash
# Fazer login no Netlify
netlify login

# Deploy de produção
netlify deploy --prod

# Siga as instruções:
# - Create & configure a new site: Yes
# - Team: escolha seu time
# - Site name: andrefelipe-portfolio (ou deixe gerar)
# - Publish directory: . (ponto para raiz)
```

### Método 3: Drag & Drop

Método mais simples para quem está começando.

1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto inteira
3. Aguarde o upload e processamento
4. Pronto! Seu site está no ar

⚠️ **Atenção**: Este método não permite atualizações automáticas.

## 🔄 Atualizações Futuras

### Se usou GitHub + Netlify:

```bash
# Fazer alterações nos arquivos
# Depois:
git add .
git commit -m "Descrição das mudanças"
git push

# O Netlify fará deploy automático!
```

### Se usou Netlify CLI:

```bash
# Após fazer alterações:
netlify deploy --prod
```

### Se usou Drag & Drop:

1. Faça as alterações localmente
2. Volte ao Netlify Drop
3. Arraste a pasta novamente

## 🔧 Troubleshooting

### Problema: CSS/JS não carregam

**Solução**: Verifique se as referências em `index.html` estão corretas:
```html
<link rel="stylesheet" href="/styles.css"/>
<script src="/app.js"></script>
```

### Problema: Imagens não aparecem

**Solução**: As imagens estão em CDN externo. Verifique se as URLs estão acessíveis.

### Problema: Site mostra 404

**Solução**: Certifique-se de que `netlify.toml` existe e está configurado corretamente.

## ✅ Checklist Final

Antes de fazer deploy, verifique:

- [ ] Todas as imagens estão carregando
- [ ] Links de WhatsApp e Email estão corretos
- [ ] Links dos projetos (autocontrato.mocha.app, naregua.mocha.app) estão funcionando
- [ ] Testou o site localmente
- [ ] Todas as animações funcionam
- [ ] Site é responsivo (teste em mobile)
- [ ] Meta tags Open Graph estão configuradas
- [ ] Favicon está presente (opcional)

## 🎯 Próximos Passos

Após o deploy:

1. **SEO**: Configure Google Search Console
2. **Analytics**: Adicione Google Analytics
3. **Performance**: Teste em PageSpeed Insights
4. **Compartilhe**: Teste links nas redes sociais
5. **Domínio**: Configure domínio personalizado

## 📞 Suporte

Se tiver problemas:
- Documentação Netlify: https://docs.netlify.com
- Suporte Netlify: https://answers.netlify.com
- GitHub Issues: Crie uma issue no repositório

---

**Sucesso com seu deploy! 🎉**
