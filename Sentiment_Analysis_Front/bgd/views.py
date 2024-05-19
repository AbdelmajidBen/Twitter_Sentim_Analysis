from django.shortcuts import render
from pymongo import MongoClient
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Tweet
import matplotlib.pyplot as plt
from io import BytesIO
from pymongo import MongoClient
import base64
from collections import Counter
import numpy as np
from collections import defaultdict
from django.shortcuts import render
from django.http import HttpResponse
from pyspark.sql import SparkSession
from pyspark.ml import PipelineModel

def say_hello(request):
    return render(request, 'hello.html')

def dashboard(request):
    # Retrieve all tweets from MongoDB
    tweets = Tweet.objects.all()

    # Initialize lists to store timestamps, predictions, and confidence
    timestamps = []
    predictions = []
    confidence = []
    total_prediction = []
    confidence = []
    cpu_usage = []
    memory_usage = []

    # Extract timestamp, prediction, and confidence from each tweet
    for tweet in tweets:
        timestamps.append(str(tweet.timestamp))
        predictions.append(tweet.prediction)
        confidence.append(max(tweet.rawPredictionArray))
        cpu_usage.append(tweet.cpu_usage)
        memory_usage.append(tweet.memory_usage)


    # Now you can use these lists for further processing or rendering in your view
    context = {
        'timestamps': timestamps[-10:],
        'predictions': predictions[-10:],
        'confidence': confidence[-10:],
        'all_prediction' : predictions,
        'confidence': confidence,
        'cpu_usage': cpu_usage,
        'memory_usage': memory_usage,
    }

    return render(request, 'dashboard.html', context)


def architecture(request):
    return render(request, 'architecture.html')

def data(request):
    tweets_list = Tweet.objects.all()
    tweets_per_page = 20
    paginator = Paginator(tweets_list, tweets_per_page)
    page_number = request.GET.get('page', 1)
    try:
        tweets = paginator.page(page_number)
    except PageNotAnInteger:
        tweets = paginator.page(1)
    except EmptyPage:
        tweets = paginator.page(paginator.num_pages)
    return render(request, 'data.html', {'tweets': tweets})

def testing(request):
    if request.method == 'POST':
        input_text = request.POST.get('input_text', '')

        # Initialize Spark session
        spark = SparkSession.builder \
            .appName("Sentiment Analysis") \
            .config("spark.executor.memory", "16g") \
            .getOrCreate()

        try:
            # Load the Spark ML model and pipeline
            model_path = "/Users/mac/Desktop/big_data/ML/logistic_regression_model"  # Update with actual path to model
            model = PipelineModel.load(model_path)

            # Create a DataFrame from the input text
            input_data = spark.createDataFrame([(input_text,)], ['Text'])

            # Use the model to make predictions
            predictions = model.transform(input_data)

            # Get the predicted sentiment label
            sentiment_index = int(predictions.select('prediction').collect()[0][0])
            sentiment_labels = ['Negative', 'Neutral', 'Positive']
            sentiment = sentiment_labels[sentiment_index]

            # Stop the Spark session
            spark.stop()

            # Render a template with the sentiment analysis result
            return render(request, 'testing.html', {'input_text': input_text, 'sentiment': sentiment})

        except Exception as e:
            # Handle any errors during model loading or inference
            error_message = f"Error: {str(e)}"
            return HttpResponse(error_message, status=500)

    return render(request, 'testing.html')  # Render the initial form page

def models(request):
    return render(request, 'models.html')

def team(request):
    return render(request, 'team.html')
