from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Hat, LocationVO

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = [
        "closet_name",
        "import_href",
    ]

class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style",
        "color",
        "picture_url",
        "location",
        "id",
        ]
    encoders = {
        "location": LocationVOEncoder(),
    }

class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style",
        "color",
        "picture_url",
        "location",
        ]
    encoders = {
        "location": LocationVOEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()

        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            location = LocationVO.objects.get(import_href=content["location"])
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_hat_details(request, pk):
    if request.method == "GET":
        hat = Hat.objects.get(id=pk)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            if "location" in content:
                location = LocationVO.objects.get(import_href=content["location"])
                content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location"},
                status=400,
            )
        Hat.objects.filter(id=pk).update(**content)
        hat = Hat.objects.get(id=pk)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )