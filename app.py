import json
import os
import random
from flask import Flask, render_template
from dotenv import find_dotenv, load_dotenv

from spoonacular import *

app = Flask(__name__)
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0


@app.route("/")
def main():
    # recipe_ids = search_recipe_by_ingred("chicken, tomatoes")
    recipe_id = 782601

    (
        recipe_img,
        recipe_title,
        servings,
        ready_in_mins,
        source_url,
        dish_types,
        ingredients,
    ) = get_recipe_info(recipe_id)

    get_nutritional_breakdown_png(recipe_id)

    instructions = get_recipe_instructions(recipe_id)

    return render_template(
        # "recipepage.html",
        "mealboard.html",
        recipe_img=recipe_img,
        recipe_title=recipe_title,
        servings=servings,
        ready_in_mins=ready_in_mins,
        source_url=source_url,
        dish_types=dish_types,
        length=len(dish_types),
        ingredients=ingredients,
        instructions=instructions,
    )


app.run(
    # host=os.getenv("IP", "0.0.0.0"),
    # port=int(os.getenv("PORT", 8080)),
    debug=True
)
