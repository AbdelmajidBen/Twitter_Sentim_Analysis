# Generated by Django 4.1.13 on 2024-05-09 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bgd', '0004_rename_rawprediction_tweet_rawpredictionarray'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweet',
            name='TweetConent',
            field=models.CharField(default='None', max_length=500),
        ),
    ]
