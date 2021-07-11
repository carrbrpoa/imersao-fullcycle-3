FROM golang:latest
ADD . /go/src/github.com/carrbrpoa/imersao-fullcycle-3/challenge1
# Build the challenge1 command inside the container.
RUN go install github.com/carrbrpoa/imersao-fullcycle-3/challenge1@latest
# Run the challenge1 command when the container starts.
ENTRYPOINT /go/bin/challenge1
# http server listens on port 8000.
EXPOSE 8000