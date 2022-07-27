from django.urls import path

from .api_views import api_list_hats

urlpatterns = [
    path("hats/", api_list_hats, name="api_list_hats"),
    # path(
    #     "conferences/<int:conference_vo_id>/attendees/",
    #     api_list_attendees,
    #     name="api_list_attendees",
    # ),
    # path("attendees/<int:pk>/", api_show_attendee, name="api_show_attendee"),
]