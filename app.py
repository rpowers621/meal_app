import json
import os
from flask import Flask, request, render_template, session
from dotenv import find_dotenv, load_dotenv
import flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import (
    UserMixin,
    LoginManager,
    login_user,
    current_user,
    login_required,
    logout_user,
)

from spoonacular import *


load_dotenv(find_dotenv())


app = flask.Flask(__name__, static_folder="./build/static")
bp = flask.Blueprint("bp", __name__, template_folder="./build")


app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = os.getenv("SECRET_KEY")


url = os.getenv("DATABASE_URL")
if url and url.startswith("postgres://"):
    url = url.replace("postgres://", "postgresql://", 1)

app.config["SQLALCHEMY_DATABASE_URI"] = url


db = SQLAlchemy(app)
login_manager = LoginManager()

login_manager.login_view = "login"
login_manager.init_app(app)


class User(db.Model, UserMixin):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):

        return f"<User {self.user_id}>"

    def get_id(self):
        return self.user_id


class RecipeUser(db.Model):

    recipe_id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer)
    day = db.Column(db.Integer)


db.create_all()


@login_manager.user_loader
def loadUser(user_name):
    return User.query.get(user_name)


@app.route("/")
def main():
    return flask.redirect(flask.url_for("bp.index"))


@app.route("/", methods=["POST"])
def login():
    print("in login test2")
    email = flask.request.json.get("email")
    print(email)
    user = User.query.filter_by(email=email).first()

    if user:
        print("already user")
        login_user(user)

        return flask.redirect(flask.url_for("bp.index"))
    else:
        user = User(email=email)
        db.session.add(user)
        db.session.commit()
        login_user(user)
        print("user added")

    return flask.redirect(flask.url_for("bp.index"))


@bp.route("/index", methods=["GET", "POST"])
def index():
    return flask.render_template("index.html")


@bp.route("/connectDB", methods=["POST"])
def connect():
    user = current_user.user_id
    recipes = RecipeUser.query.filter_by(user_id=user).all()
    rep_ids = [a.recipe_id for a in recipes]
    has_artists_saved = len(rep_ids) > 0
    if has_artists_saved:
        print(recipes)
    else:
        print("no recipes")

    return flask.jsonify("success")


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

    return flask.jsonify(recipe_ids)


@bp.route("/recipepage", methods=["POST"])
def recipe_page():

    recipe_id = flask.request.json.get("id")

    if recipe_id:

        (
            recipe_img,
            recipe_title,
            servings,
            ready_in_mins,
            source_url,
            dish_types,
            ingredients,
        ) = get_recipe_info(recipe_id)

        instructions = get_recipe_instructions(recipe_id)

    else:
        (
            recipe_img,
            recipe_title,
            servings,
            ready_in_mins,
            source_url,
            dish_types,
            ingredients,
            instructions,
        ) = (
            None,
            None,
            None,
            None,
            None,
            None,
            None,
            None,
        )
    DATA = {
        "recipe_img": recipe_img,
        "recipe_title": recipe_title,
        "servings": servings,
        "ready_in_mins": ready_in_mins,
        "source_url": source_url,
        "dish_types": dish_types,
        "ingredients": ingredients,
        "instructions": instructions,
    }
    data = json.dumps(DATA)

    return data


app.register_blueprint(bp)

if __name__ == "__main__":
    app.run(
        host=os.getenv("IP", "0.0.0.0"),
        port=int(os.getenv("PORT", 3000)),
        debug=True,
    )
