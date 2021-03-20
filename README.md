# SistemaPedidos
Aplicação desenvolvida em  Node.js, HTML e MongoDB

Tela Inicial
![image](https://user-images.githubusercontent.com/50886743/111823717-0a238680-88c4-11eb-81aa-03fad9ba148a.png)

Cadastro de Produtos
![image](https://user-images.githubusercontent.com/50886743/111823792-2293a100-88c4-11eb-855f-28bd967233f9.png)

Cadastro de Clientes
![image](https://user-images.githubusercontent.com/50886743/111823867-37703480-88c4-11eb-97d8-45e02c3b8ff6.png)

Inclusão de Pedidos
![image](https://user-images.githubusercontent.com/50886743/111823939-51117c00-88c4-11eb-9442-e4ae5d684be4.png)
![image](https://user-images.githubusercontent.com/50886743/111823965-5a024d80-88c4-11eb-9855-6568567e671d.png)

## Instalação
### Banco de Dados

Faça download do Docker [Download](https://www.docker.com/products/docker-desktop)

* Caso esteja em um ambiente Windows, na instalação não escolher para usar container windows, deixar a opção que já está pré-selecionada

1. Abra o CMD e digite:

```
docker pull mongo

```

2. Subir a maquina virtual:


```
docker run --name mongodb -p 27017:27017 -d mongo

```

3. Verificar se a imagem está rodando:


```
docker ps

```

4.  Vamos baixar um gerenciador para o mongo ROBO3T [Download](https://robomongo.org/download)

### API Rest Node
* Node:12.18.4 | [Download](https://nodejs.org/en/)
* npm:6.14.6 | Faz parte da instalação do Node
* yarn:1.22.5 | [Download](https://classic.yarnpkg.com/en/docs/install#windows-stable)
<h4>Instalção das dependências</h4>

1. Instale o Node e o Yarn
2. Abra um terminal e navegue até a pasta backend
3. Insira o comando:

```
npm install

```
4. Após a instação digite o comando:

```
npm run dev

```
Isso irá iniciar um servidor do Node na porta 3001 da sua máquina.


