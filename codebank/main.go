package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/carrbrpoa/codebank/infrastructure/grpc/server"
	"github.com/carrbrpoa/codebank/infrastructure/kafka"
	"github.com/carrbrpoa/codebank/infrastructure/repository"
	"github.com/carrbrpoa/codebank/usecase"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
}

func main() {
	db := setupDb()
	defer db.Close()
	producer := setupKafkaProducer()
	processTransactionUseCase := setupTransationUseCase(db, producer)
	serveGrpc(processTransactionUseCase)
}

func setupTransationUseCase(db *sql.DB, producer kafka.KafkaProducer) usecase.UseCaseTransaction {
	transactionRepository := repository.NewTransactionRepositoryDb(db)
	useCase := usecase.NewUseCaseTransaction(transactionRepository)
	useCase.KafkaProducer = producer
	return useCase
}

func setupKafkaProducer() kafka.KafkaProducer {
	producer := kafka.NewKafkaProducer()
	producer.SetupProducer(os.Getenv("KafkaBootstrapServers"))
	return producer
}

func setupDb() *sql.DB {
	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("host"),
		os.Getenv("port"),
		os.Getenv("user"),
		os.Getenv("password"),
		os.Getenv("dbname"),
	)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal("error connecting to database")
	}
	return db
}

func serveGrpc(processTransactionUseCase usecase.UseCaseTransaction) {
	grpcServer := server.NewGPRCServer()
	grpcServer.ProcessTransactionUseCase = processTransactionUseCase
	fmt.Println("Rodando gRPC Server")
	grpcServer.Serve()
}

// cc := domain.NewCreditCard()
// cc.Number = "1234"
// cc.Name = "Cesar"
// cc.ExpirationYear = 2021
// cc.ExpirationMonth = 7
// cc.CVV = 123
// cc.Limit = 1000
// cc.Balance = 0

// repo := repository.NewTransactionRepositoryDb(db)
// err := repo.CreateCreditCard(*cc)
// if err != nil {
// 	fmt.Println(err)
// }
