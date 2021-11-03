import requests
import os
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

API_KEY = os.getenv("API_KEY")

BASE_URL = "https://api.spoonacular.com/"

HEADER = {"Content-Type": "application/json"}
# this is the number of recipes returned
NUM_RECIPES = 5


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

    recep_info = f"recipes/{id}/information?apiKey={API_KEY}&number={NUM_RECIPES}"

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

            ingredients[response_data["extendedIngredients"][i]["id"]] = response_data[
                "extendedIngredients"
            ][i]["name"]

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


ingreds = "apples,flour,sugar"
# search_rep_by_ingred(ingreds)
get_rep_info(716429)
