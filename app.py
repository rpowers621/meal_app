import json
import os
from flask import Flask, request, render_template
from dotenv import find_dotenv, load_dotenv
import flask


from spoonacular import *

app = Flask(__name__)
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

app = flask.Flask(__name__, static_folder="./build/static")
bp = flask.Blueprint("bp", __name__, template_folder="./build")

load_dotenv(find_dotenv())

url = os.getenv("DATABASE_URL")
if url and url.startswith("postgres://"):
    url = url.replace("postgres://", "postgresql://", 1)


@bp.route("/index", methods=["GET", "POST"])
def index():
    return flask.render_template("index.html")


@bp.route("/getsuggestions", methods=["POST"])
def getSuggestions():
    searchType = flask.request.json.get("searchType")
    searchCritria = flask.request.json.get("searchCritria")
    if searchType == "ingredients":
        recipe_ids = search_recipe_by_ingred(searchCritria)

    print(searchType)
    print(searchCritria)

    return flask.jsonify({"suggestions": recipe_ids})


@app.route("/recipepage")
def recipe_page():
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
        "recipepage.html",
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


app.register_blueprint(bp)

if __name__ == "__main__":
    app.run(port=int(os.getenv("PORT", 5000)), debug=True)
# host=os.getenv("IP", "0.0.0.0"),
