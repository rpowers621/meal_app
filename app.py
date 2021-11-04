import json
import os
from flask import Flask, render_template
from dotenv import find_dotenv, load_dotenv

from spoonacular import *

app = Flask(__name__)
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

recipe_ids = search_rep_by_ingred("STR OF INGREDIENTS")

(
    recep_img,
    servings,
    ready_in_mins,
    source_url,
    summary,
    dish_types,
    ingredients,
) = get_rep_info("ID OF RECIPE")

png = get_nutritional_breakdown_png("ID OF RECIPE")

instructions = get_recep_instructions("ID OF RECIPE")


@app.route("/")
def main():

    return render_template(
        "index.html",
    )


app.run(
    # host=os.getenv("IP", "0.0.0.0"),
    # port=int(os.getenv("PORT", 8080)),
    debug=True
)
