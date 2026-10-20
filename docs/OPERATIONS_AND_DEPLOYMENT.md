# GIGANTERA — Operações, Infraestrutura & Deploy Contínuo

> **Versão:** 2.0 (Outubro 2026)  
> **Domínio de Produção:** [https://gigantera.xyz](https://gigantera.xyz)  
> **Arquivos Fonte:** `vercel.json`, `scripts/sync_bunny_cdn.cjs`, `package.json`, `.env.example`

---

## 1. Comandos de Operação e Ciclo de Vida

```bash
# 1. Instalação limpa de dependências
npm install

# 2. Execução do servidor de desenvolvimento local (Vite HMR)
npm run dev

# 3. Verificação estrita de tipagem TypeScript (deve retornar 0 erros)
npx tsc --noEmit

# 4. Compilação de bundle estático para produção
npm run build

# 5. Pré-visualização do bundle gerado em dist/
npm run preview
```

---

## 2. Infraestrutura de Hospedagem & Vercel Edge

O projeto está configurado para deploy automático na **Vercel** conectado ao repositório GitHub `Pelimotion/gigantera-portfolio` na branch `main`.

### Arquivo `vercel.json`:
- **Roteamento SPA**:
  - `/ar` mapeado para `/ar/index.html` (WebAR Espinhaço).
  - `/admin` mapeado para `/admin/index.html` (Curador e Media Kit).
  - Rotas raiz e subpastas reescritas para `/index.html`.
- **Cabeçalhos de Cache**:
  - Arquivos com hash em `/assets/*`: `Cache-Control: public, max-age=31536000, immutable`.
  - Arquivos HTML de entrada: `Cache-Control: public, max-age=0, must-revalidate` (garante que atualizações entrem no ar imediatamente após o deploy).
- **CORS Habilitado**:
  - `Access-Control-Allow-Origin: *` em assets estáticos para permitir carregamento WebGL e Web Audio sem bloqueios.

---

## 3. Arquitetura de CDN & Edge Storage (Bunny.net)

Para garantir que vídeos 4K, áudios de alta fidelidade e modelos 3D pesados não saturem a Vercel e carreguem instantaneamente no Brasil e no mundo:

- **Pull Zone Oficial:** `https://gigantera-penumbra.b-cdn.net`
- **Região de Edge Primária:** São Paulo (`br.storage.bunnycdn.com`)
- **HTTP 206 (Byte-Range Requests)**: Habilitado para permitir busca instantânea (scrubbing) nos vídeos e áudios sem precisar baixar o arquivo inteiro primeiro.

### Script de Sincronização Automática (`scripts/sync_bunny_cdn.cjs`):
Permite enviar novos masters, faixas de áudio e posters diretamente do terminal para o storage edge:
```bash
# Executar sincronização de arquivos para a CDN da Bunny
node scripts/sync_bunny_cdn.cjs
```

---

## 4. Variáveis de Ambiente (`.env`)

Exemplo de configuração contida em `.env.example`:
```env
# URL base da CDN de mídia
VITE_CDN_BASE_URL=https://gigantera-penumbra.b-cdn.net

# Chaves de API para scripts de sync (armazenadas localmente/seguras)
BUNNY_STORAGE_ZONE_NAME=gigantera-storage
BUNNY_STORAGE_API_KEY=seu_token_aqui
BUNNY_STORAGE_REGION=br
```

---

## 5. Rotina Recomendada para Novas Releases / Atualizações

Sempre que realizar uma melhoria no código:

1. Execute a checagem de tipos:
   ```bash
   npx tsc --noEmit
   ```
2. Valide o build:
   ```bash
   npm run build
   ```
3. Comite com mensagem semântica:
   ```bash
   git add .
   git commit -m "feat/fix: descrição clara do que mudou"
   git push origin main
   ```
4. Se desejar disparar deploy direto do terminal:
   ```bash
   npx vercel --prod --yes
   ```
5. Valide online em: [https://gigantera.xyz](https://gigantera.xyz)
