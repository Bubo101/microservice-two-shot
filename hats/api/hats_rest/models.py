from django.db import models


class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    # section_number = models.PositiveSmallIntegerField()
    # shelf_number = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length=200, unique=True, null=True)


class Hat(models.Model):
    fabric = models.CharField(max_length=200)
    style = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField(max_length=200)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.PROTECT,        
)
