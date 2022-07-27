import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()
from hats_rest.models import LocationVO
# Import models from hats_rest, here.
# from hats_rest.models import Something

def get_locations():
    response = requests.get("http://wardrobe-api:8000/api/locations/")
    print(response)
    print("hello")
    content = json.loads(response.content)
    print(content)
    for location in content["locations"]:
        LocationVO.objects.update_or_create(
            import_href=location["href"],
            defaults={"closet_name": location["closet_name"]},
        )

def poll():
    while True:
        print("Hat polling")
        try:
            get_locations()
        except Exception as e:
            print(e)
        time.sleep(5)


if __name__ == "__main__":
    poll()

