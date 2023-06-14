<h2 align="center">Lambda da API de Usuário</h2>




## Novos Desafios

`lambda function, microsservico rodando. Localstack. Request HTTP aciona a lambda (function valida payload e envia o payload para SQS), users pega a mensagem enviada pelo lambda consome a fila e salva o usuario no banco banco.`


`Lambda recebe request manda mensagem no microsservico, o microsservico recebe a mensagem via SQS para gerar o arquivo e manda para o S3, rota para listar os arquivos.`


## AWS CLI

**Create QUEUE SQS**

```sh

echo "Create SQS queue testQueue"
aws \
  sqs create-queue \
  --queue-name AWS_SQS_URL_READY_CREATED_USER \
  --endpoint-url http://localhost:4566/000000000000/


```
