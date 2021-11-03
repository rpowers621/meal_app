import requests
import os
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

API_KEY = os.getenv("API_KEY")


def search_rep_by_ingred(str):

    NUM_RECIPES = 5

    BASE_URL = f"https://api.spoonacular.com/recipes/findByIngredients?apiKey={API_KEY}&ingredients={str}&number={NUM_RECIPES}"

    headers = {"Content-Type": "application/json"}
    # this is the number of recipes returned

    response = requests.get(url=BASE_URL, headers=headers)
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


ingreds = "apples,flour,sugar"
search_rep_by_ingred(ingreds)
