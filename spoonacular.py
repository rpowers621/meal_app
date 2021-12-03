import os
import requests
import random
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

API_KEY = os.getenv("API_KEY")

BASE_URL = "https://api.spoonacular.com/"

HEADER = {"Content-Type": "application/json"}
# this is the number of recipes returned
NUM_RECIPES = 5

SIZE = "100x100"

IMG_URL = f"https://spoonacular.com/cdn/ingredients_{SIZE}/"


def search_recipe_by_ingred(str):

    by_ingred = f"recipes/findByIngredients?apiKey={API_KEY}&ingredients={str}&number={NUM_RECIPES}"

    response = requests.get(url=BASE_URL + by_ingred, headers=HEADER)
    response_data = response.json()

    recipe_ids = {}
    length = len(response_data)
    if length > 0:
        for i in range(length):
            try:
                recipe_ids[response_data[i]["id"]] = response_data[i]["title"]
            except KeyError:
                print(KeyError)
                break
        id = random.choice(list(recipe_ids.items()))

        return id
    else:
        return ""


def get_recipe_info(id):

    recep_info = f"recipes/{id}/information?apiKey={API_KEY}"

    response = requests.get(url=BASE_URL + recep_info, headers=HEADER)
    response_data = response.json()

    if "image" in response_data:
        recipe_img = response_data["image"]
    else:
        recipe_img = None
    recipe_title = response_data["title"]
    servings = response_data["servings"]
    ready_in_mins = response_data["readyInMinutes"]
    source_url = response_data["sourceUrl"]
    dish_types = response_data["dishTypes"]

    length = len(response_data["extendedIngredients"])

    ingredients = []
    ingred_imgs = []
    for i in range(length):
        try:
            if response_data["extendedIngredients"][i]["image"]:
                ingredients.append(response_data["extendedIngredients"][i]["name"])
                ingred_imgs.append(
                    IMG_URL + response_data["extendedIngredients"][i]["image"]
                )

        except KeyError:
            print(KeyError)
            break

    return (
        recipe_img,
        recipe_title,
        servings,
        ready_in_mins,
        source_url,
        dish_types,
        ingredients,
        ingred_imgs,
    )


def get_nutritional_breakdown_png(id):

    price_breakdown = f"recipes/{id}/nutritionWidget.png?apiKey={API_KEY}"

    img_header = {"Accept": "image/png", "Content-Type": "image/png"}

    response = requests.get(url=BASE_URL + price_breakdown, headers=img_header)
    if response.status_code == 200:
        with open("public/nutritional_breakdown.png", "wb") as f:
            f.write(response.content)


def get_recipe_instructions(id):

    analyze_instructions = (
        f"recipes/{id}/analyzedInstructions?apiKey={API_KEY}&stepBreakdown=true"
    )

    response = requests.get(url=BASE_URL + analyze_instructions, headers=HEADER)
    response_data = response.json()

    instructions = []

    length = len(response_data)

    for i in range(length):
        try:
            len2 = len(response_data[i]["steps"])
            for j in range(len2):
                try:
                    instructions.append(response_data[i]["steps"][j]["step"])
                except KeyError:
                    print(KeyError)
                    break
        except KeyError:
            print(KeyError)
            break

    return instructions


def get_recipe_by_cuisine(str):

    cuisine_search = (
        f"recipes/complexSearch?apiKey={API_KEY}&cuisine={str}&number={NUM_RECIPES}"
    )

    response = requests.get(url=BASE_URL + cuisine_search, headers=HEADER)
    response_data = response.json()

    recipe_ids_by_cuisine = {}
    length = len(response_data["results"])

    for i in range(length):
        try:
            recipe_ids_by_cuisine[response_data["results"][i]["id"]] = response_data[
                "results"
            ][i]["title"]
        except KeyError:
            print(KeyError)
            break
    id = random.choice(list(recipe_ids_by_cuisine.items()))
    print(id)
    return id


def get_recipe_by_diet(str):

    diet_search = (
        f"recipes/complexSearch?apiKey={API_KEY}&diet={str}&number={NUM_RECIPES}"
    )

    response = requests.get(url=BASE_URL + diet_search, headers=HEADER)
    response_data = response.json()

    recipe_ids_by_diet = {}
    if response_data is not None:
        length = len(response_data["results"])

        for i in range(length):
            try:
                recipe_ids_by_diet[response_data["results"][i]["id"]] = response_data[
                    "results"
                ][i]["title"]
            except KeyError:
                print(KeyError)
                break
        print(recipe_ids_by_diet)

        id = random.choice(list(recipe_ids_by_diet.items()))
        print(id)
        return id
    else:
        return recipe_ids_by_diet


def search_recipe_by_calories(str):
    calorie_search = f"mealplanner/generate?apiKey={API_KEY}&targetCalories={str}&timeFrame=day&number={NUM_RECIPES}"

    response = requests.get(url=BASE_URL + calorie_search, headers=HEADER)
    response_data = response.json()

    recipe_ids_by_calories = {}

    length = len(response_data["meals"])

    for i in range(length):
        try:
            recipe_ids_by_calories[response_data["meals"][i]["id"]] = response_data[
                "meals"
            ][i]["title"]
        except KeyError:
            print(KeyError)
            break

    return recipe_ids_by_calories
