import os
import requests
from bs4 import BeautifulSoup
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

API_KEY = os.getenv("API_KEY")

BASE_URL = "https://api.spoonacular.com/"

HEADER = {"Content-Type": "application/json"}
# this is the number of recipes returned
NUM_RECIPES = 5

SIZE = "100x100"

IMG_URL = f"https://spoonacular.com/cdn/ingredients_{SIZE}/"


def search_rep_by_ingred(str):

    by_ingred = f"recipes/findByIngredients?apiKey={API_KEY}&ingredients={str}&number={NUM_RECIPES}"

    response = requests.get(url=BASE_URL + by_ingred, headers=HEADER)
    response_data = response.json()

    recipe_ids = {}
    length = len(response_data)

    for i in range(length):
        try:
            recipe_ids[response_data[i]["id"]] = response_data[i]["title"]
        except KeyError:
            print(KeyError)
            break

    print(recipe_ids)


def get_rep_info(id):

    recep_info = f"recipes/{id}/information?apiKey={API_KEY}"

    response = requests.get(url=BASE_URL + recep_info, headers=HEADER)
    response_data = response.json()

    recep_img = response_data["image"]
    servings = response_data["servings"]
    ready_in_mins = response_data["readyInMinutes"]
    source_url = response_data["sourceUrl"]
    summary = response_data["summary"]
    dish_types = response_data["dishTypes"]

    length = len(response_data["extendedIngredients"])

    ingredients = {}
    for i in range(length):
        try:

            ingredients[response_data["extendedIngredients"][i]["id"]] = {
                "name": response_data["extendedIngredients"][i]["name"],
                "image": IMG_URL + response_data["extendedIngredients"][i]["image"],
            }

        except KeyError:
            print(KeyError)
            break

    return (
        recep_img,
        servings,
        ready_in_mins,
        source_url,
        summary,
        dish_types,
        ingredients,
    )


def get_price_breakdown_cost(id):

    price_breakdown = (
        f"recipes/{id}/priceBreakdownWidget?apiKey={API_KEY}&defaultCss=true"
    )

    widget_header = {"Content-Type": "text/html", "Accept": "text/html"}

    response = requests.get(url=BASE_URL + price_breakdown, headers=widget_header)
    html_doc = response.text
    img = BeautifulSoup(html_doc, "html.parser")
    print(img.prettify())


def get_recep_instructions(id):

    analyze_instructions = (
        f"recipes/{id}/analyzedInstructions?apiKey={API_KEY}&stepBreakdown=true"
    )

    response = requests.get(url=BASE_URL + analyze_instructions, headers=HEADER)
    response_data = response.json()

    instructions = {}

    length = len(response_data)

    for i in range(length):
        try:
            len2 = len(response_data[i]["steps"])
            for j in range(len2):
                try:
                    instructions[f"step{j+1}"] = response_data[i]["steps"][j]["step"]
                except KeyError:
                    print(KeyError)
                    break
        except KeyError:
            print(KeyError)
            break

    return instructions


ingreds = "apples,flour,sugar"
# search_rep_by_ingred(ingreds)
# get_rep_info(716429)
# get_price_breakdown_cost(716429)
# get_recep_instructions(4632)
