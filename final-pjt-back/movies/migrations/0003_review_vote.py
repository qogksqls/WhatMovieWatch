# Generated by Django 3.2.12 on 2022-05-25 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='vote',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
