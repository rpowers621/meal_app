import json
import os
from flask import Flask, request, render_template
from dotenv import find_dotenv, load_dotenv
import flask
from flask_sqlalchemy import SQLAlchemy


from spoonacular import *

app = Flask(__name__)

app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app = flask.Flask(__name__, static_folder="./build/static")
bp = flask.Blueprint("bp", __name__, template_folder="./build")

load_dotenv(find_dotenv())

url = os.getenv("DATABASE_URL")
if url and url.startswith("postgres://"):
    url = url.replace("postgres://", "postgresql://", 1)

app.config["SQLALCHEMY_DATABASE_URI"] = url

db = SQLAlchemy(app)

user_recipes = db.Table(
    "user_recipes",
    db.Column("user_id", db.Integer, db.ForeignKey("user.user_id")),
    db.Column("recipe_id", db.Integer, db.ForeignKey("recipe.recipe_id")),
    db.Column("day", db.Integer),
)


class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_recipes = db.relationship(
        "Recipe",
        secondary="user_recipes",
        backref=db.backref("user_recipes", lazy="dynamic"),
    )


class Recipe(db.Model):
    recipe_id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(120), nullable=False)


db.create_all()


@app.route("/")
def main():
    return flask.redirect(flask.url_for("bp.index"))


@bp.route("/index", methods=["GET", "POST"])
def index():
    return flask.render_template("index.html")


@bp.route("/getsuggestions", methods=["POST"])
def getSuggestions():
    searchType = flask.request.json.get("searchType")
    searchCritria = flask.request.json.get("searchCritria")
    if searchType == "ingredients":
        recipe_ids = search_recipe_by_ingred(searchCritria)
    if searchType == "calories":
        recipe_ids = search_recipe_by_calories(searchCritria)
    if searchType == "diet":
        recipe_ids = get_recipe_by_diet(searchCritria)
    if searchType == "cuisine":
        recipe_ids = get_recipe_by_cuisine(searchCritria)
    print(searchType)
    print(searchCritria)
    ids = recipe_ids.keys()
    titles = recipe_ids.values()

    return flask.jsonify(recipe_ids)


@app.route("/recipepage")
def recipe_page():

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
    app.run(
        # host=os.getenv("IP", "0.0.0.0"),
        port=int(os.getenv("PORT", 5000)),
        debug=True,
    )
