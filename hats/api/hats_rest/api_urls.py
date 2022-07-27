from django.urls import path

from .api_views import api_list_hats, api_hat_details

urlpatterns = [
    path("hats/", api_list_hats, name="api_list_hats"),
    # path(
    #     "conferences/<int:conference_vo_id>/attendees/",
    #     api_list_attendees,
    #     name="api_list_attendees",
    # ),
    path("hats/<int:pk>/", api_hat_details, name="api_show_hat"),
]