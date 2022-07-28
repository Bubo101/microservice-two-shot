# Wardrobify

Team:

* Person 1 - Nikansha Maharaj
* Person 2 - Boden Bradley

## Design

## Shoes microservice

- [x]  Install Django app in Django project
    - [x]  INSTALLED APPS in shoes/api/shoes_project/settings.py, register shoes_rest.apps.ShoesApiConfig
- [x]  Create Models in shoes\api\shoes_rest\[models.py]
    - [x]  properties:
        - [x]  manufacturer,
        - [x]  model_name,
        - [x]  color,
        - [x]  picture_url,
        - [x]  foreign key to bin (bin model is in the wardrobe app)
            - [x]  you’ll need to create a class BinVO(models.Model)
- [x]  Register Shoe model in admin.py
- [x]  Use Docker Desktop to make migrations and migrate to the database
- [x]  Views . py : shoes\api\shoes_rest\[views.py]
    - [x]  Create BinVOEncoder
    - [x]  Create ShoeEncoder
    - [x]  def api_list_shoes
        - [x]  GET, POST(reference def api_list_attendees from Conference_GO  &&  def api_bins(request): from wardrobe_api in microservice-two-shot)
    - [x]  def api_show_shoes
        - [x]  GET
        - [x]  DELETE (used monolith/events/api_views.py as reference from Conference_GO)
- [x]  Create urlpatterns in shoes\api\shoes_project\[urls.py]
    - [x]  Register our shoes_rest.urls in our shoes_project
    - [x]  Create a [urls.py] file in shoes_rest app
- [x]  Insomnia - create Wardrobify collection
    - [x]  Bins
        - [x]  GET list of all bins
        - [x]  GET details of one bin
        - [x]  PUT update details of one bin
        - [x]  DEL one bin
        - [x]  POST create one new bin
    - [x]  Shoes
        - [x]  GET list of all shoes
        - [x]  DEL one shoe
        - [x]  POST create one new shoe
- [x]  Write the poller in attendees_microservice\attendees\conference_poll.py
    - [x]  reference attendees_microservice\attendees\conference_poll.py from Conference_GO
- [x]  create RESTful APIs
    - [x]  to get a list of shoes,
    - [x]  create a new shoe,
    - [x]  and delete a shoe
- [x]  create React component(s)
    - [x]  to show a list of all shoes
    - [x]  and show shoe details
    - [x]  show a form to create a new shoe
- [x]  provide a way to delete a shoe
- [x]  route the existing navigation links to your components

## Hats microservice

Create Models:
    Hat Model
        -with fields: fabric, style, color, picture_url, location
        -location is foreign key to Location VO model
    Location VO Model
        -design decision was made to only have closet_name field
        -added import_href field to facilitation id with Location model in Wardrobe
Create Views/API Interface:
    -list hats, create hats, delete hats
Add Polling Function:
    -create poling function in polling microservice to copy Location model data to LocationVO
Test insomnia functions:
    -test create, delete, list functions and create items in location before adding hats 
React Front End:
    -hat list and hat create pages made to fetch appropriate data from localhost 
    -create form made with drop down list of locations
    -list form made with delete button that uses the delete view to remove a hat 
    -nav links routed 

