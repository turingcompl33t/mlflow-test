FROM ghcr.io/mlflow/mlflow

WORKDIR /app

COPY ./mlflow-test-plugin /app/mlflow-test-plugin
RUN pip install flask-cors /app/mlflow-test-plugin

ENTRYPOINT ["mlflow", "server", "--host=0.0.0.0", "--app-name=custom_app"]
