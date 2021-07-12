# Full Cycle - Challenge 3

Put a Kubernetes cluster on with Kind (https://kind.sigs.k8s.io/)
```sh
kind create cluster --name=challenge3
```

Run Kubernetes with kind
- Backend (from challenge3/k8s directory)
```sh
cd forApi
kubectl apply -f configmap.yml
kubectl apply -f deploy.yml
kubectl apply -f service.yml
kubectl port-forward svc/appapi-service 3000:3000
```
- Frontend (from challenge3/k8s directory)
```sh
cd forApp
kubectl apply -f configmap.yml
kubectl apply -f deploy.yml
kubectl apply -f service.yml
kubectl port-forward svc/appweb-service 3001:3001
```