# 🐾 Pet Shop - Frontend

Frontend da aplicação **Pet Shop**, desenvolvido em **React** com **Vite**, responsável pela interface do usuário e integração com o backend seguro via **Keycloak**.

---

## 🚀 Tecnologias Utilizadas

* **React 18**
* **Vite**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **daisyUI**
* **Keycloak JS**
* **Nginx** (produção)
* **Docker & Docker Compose**

---

## 📂 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components    # Páginas da aplicação
│   ├── auth          # Configuração Keycloak
│   ├── App.jsx
│   └── main.jsx
├── public/
├── nginx.conf
├── docker-compose.yml
├── Dockerfile
└── vite.config.js
```

---

## 🔐 Autenticação com Keycloak

O frontend se autentica diretamente no **Keycloak**, obtendo um **Access Token JWT**, que é enviado nas requisições ao backend.

Fluxo:

1. Usuário acessa o frontend
2. Redirecionamento para login no Keycloak
3. Token JWT é gerado
4. Token é enviado no header `Authorization`

```
Authorization: Bearer <TOKEN>
```

---

## 🌐 Integração com Backend

As chamadas para o backend são feitas através do **Nginx**, utilizando proxy reverso.

### Exemplo

```
GET /api/clientes
```

Nginx redireciona para:

```
http://backend:8081/api/clientes
```

---

## ⚙️ Configuração do Nginx

```nginx
server {
    listen 5173;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://backend:8081/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Authorization $http_authorization;
    }
}
```

---

## 🐳 Executando com Docker

### Subir aplicação

```bash
docker-compose up -d --build
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

## 🧪 Ambiente de Desenvolvimento

### Instalar dependências

```bash
npm install
```

### Rodar localmente

```bash
npm run dev
```

> 🔔 Em desenvolvimento, o Vite utiliza proxy configurado no `vite.config.js`.

---

## 🧠 Observações Importantes

* O frontend **não valida o token**, apenas o repassa
* Token deve ser armazenado com cuidado (memory / session)
* Backend é responsável pela autorização

---

## 👨‍💻 Autor

Vinicius Souza