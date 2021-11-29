# Generated by Django 3.2.7 on 2021-11-17 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0043_delete_shortenedlink'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='category',
            field=models.CharField(blank=True, db_index=True, help_text='The top-level classification of this media file.', max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='audio',
            name='category',
            field=models.CharField(blank=True, db_index=True, help_text='The top-level classification of this media file.', max_length=80, null=True),
        ),
    ]
