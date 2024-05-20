
# Real-Time Twitter Sentiment Analysis with Kafka, PySpark, and Machine Learning

## -Introduction
This project aims to perform real-time sentiment analysis on Twitter data using Apache Kafka, PySpark, and machine learning models. The project includes modules for data ingestion, preprocessing, model training, real-time prediction, and logging of results in MongoDB.

## -Requirements
To run this project, you need to have the following installed:
- Apache Kafka
- Apache Zookeeper
- Python (version >= 3.6)
- Pipenv (for managing Python dependencies)
- pymongo == 1.3.6
- pytz
- djongo
- mongodb
- docker
- pyspark
- matplotlib
- numpy
- pandas

## -Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your_username/twitter-sentiment-analysis.git
   cd twitter-sentiment-analysis
   ```
2. Install Python dependencies using Pipenv:
   ```bash
   pipenv install
   ```

## -Starting the Project

1. Build the Docker containers:
   ```bash
   docker compose build
   ```

2. Start the Docker containers:
   ```bash
   docker compose up
   ```

   > **Note:** Make sure to install MongoDB (e.g., `brew install mongodb`). Use the following credentials for login: `admin` and `password 1234`.

## -Starting the Web App

1. Navigate to the front-end directory:
   ```bash
   cd sentiment_analysis_front
   ```

2. Run the development server:
   ```bash
   python manage.py runserver
   ```
## -Files and Purpose

### -Kafka_Streaming/producer
- **Dockerfile**: Defines the environment for the Kafka producer.
- **producer.py**: Sends tweets from `twitter_validation.csv` to the Kafka topic.
- **twitter_validation.csv**: A dataset used by the producer to send sample tweets.

### -ML
- **pipeline**: Contains the pipeline configurations for data processing.
- **models**: Logistic regression models for sentiment analysis.

### -Mongo
- **MongoDB**: Stores processed tweet data after sentiment analysis.

### -Sentiment_analysis_front
- **The web application**: Built with Django to visualize sentiment analysis results.

### -Traitement
- **Dockerfile**: Defines the environment for the Kafka consumer.
- **consumer.py**: Processes incoming tweets from Kafka, performs sentiment analysis, and stores results in MongoDB.
- **save_pipeline.ipynb**: Jupyter notebook for saving the machine learning pipeline.

### -Models.ipynb
- **Overview of the models**: A Jupyter notebook detailing the machine learning models used for sentiment analysis.

### -Twitter_training.csv
- **Training dataset**: Used for training the machine learning models.


## Authors
- Abdelmajid Benjelloun
- Ayoub Bakkali
- Salma Nidar

## License
This project is licensed under the MIT License.

