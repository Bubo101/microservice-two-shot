from django.db import models


class BinVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    closet_name = models.CharField(max_length=100, blank=True, null=True)
    bin_number = models.PositiveSmallIntegerField(blank=True, null=True)
    bin_size = models.PositiveSmallIntegerField(blank=True, null=True)


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=200)
    model_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField(max_length=200)
    bin = models.ForeignKey(
        BinVO,
        related_name="shoes",
        on_delete=models.CASCADE,
        null=True
    )

