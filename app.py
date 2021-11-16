import json
import os
import random
from flask import Flask, render_template
from dotenv import find_dotenv, load_dotenv
from flask_sqlalchemy import SQLAlchemy
# from models import GoogleUser, Recipe
from spoonacular import *

app = Flask(__name__)

app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

db = SQLAlchemy(app)

user_recipes = db.Table(
    'user_recipes', 
    db.Column('user_id', db.Integer, db.ForeignKey('user.user_id')),
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipe.recipe_id'))
    )

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_recipes = db.relationship('Recipe', secondary='user_recipes', backref=db.backref('user_recipes', lazy='dynamic'))

class Recipe(db.Model):
    recipe_id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(120), nullable=False)

db.create_all()

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

app.run(
    # host=os.getenv("IP", "0.0.0.0"),
    # port=int(os.getenv("PORT", 8080)),
    debug=True
)
