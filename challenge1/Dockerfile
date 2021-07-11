FROM golang:latest
WORKDIR /app

COPY go.mod .
RUN go mod download

COPY . .

RUN go build -o /challenge1

EXPOSE 8000

CMD [ "/challenge1" ]