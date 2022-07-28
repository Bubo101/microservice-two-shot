from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Shoe, BinVO

# Create your views here.


class BinVOEncoder(ModelEncoder):
    model = BinVO
    # properties from the model
    properties = [
        "import_href", 
        "closet_name",
        "bin_number",
        "bin_size",
        "id",
    ]


class ShoeEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "id",
        "bin",
    ]
    encoders = {
        "bin": BinVOEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_shoes(request):

    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeEncoder,
        )

    else:
        content = json.loads(request.body)
        # print(content)
        try:
            # bin_href = content["bin"] # if we want to use the href in Insomnia
            # bin = BinVO.objects.get(import_href=bin_href)
            # content["bin"] = bin

            bin_id = content["bin"] # in Insomnia use the bins id
            bin = BinVO.objects.get(id=bin_id)
            content["bin"] = bin

        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id. This bin does not exist"},
                status = 400,
            )
        
        # creating one shoe
        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_shoes(request, pk):

    if request.method == "GET":
        try: 
            shoe = Shoe.objects.get(id=pk)
            return JsonResponse(
                shoe,
                encoder=ShoeEncoder,
                safe=False,
            )
        except Shoe.DoesNotExist:
            response = JsonResponse({"message": "Shoe does not exist"})
            response.status_code = 404
            return response

    else:
        count, _ = Shoe.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
