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


app = flask.Flask(__name__, static_folder="./build/static")
bp = flask.Blueprint("bp", __name__, template_folder="./build")

load_dotenv(find_dotenv())

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

    has_recipes_saved = len(recipes) > 0

    mon = RecipeUser.query.filter_by(user_id=user, day=1)
    mon_ids = [a.recipe_id for a in mon]
    # mon_ids = np.array(m_rec_ids)
    mon_name = [c.recipe_name for c in mon]
    # mon_name = np.array(m_rec_name)

    tues = RecipeUser.query.filter_by(user_id=user, day=2)
    tues_ids = [a.recipe_id for a in tues]
    # tues_ids = np.array(t_rec_ids)
    tues_name = [c.recipe_name for c in tues]
    # tues_name = np.array(t_rec_name)

    wed = RecipeUser.query.filter_by(user_id=user, day=3)
    wed_ids = [a.recipe_id for a in wed]
    # wed_ids = np.array(w_rec_ids)
    wed_name = [c.recipe_name for c in wed]
    # wed_name = np.array(w_rec_name)

    thur = RecipeUser.query.filter_by(user_id=user, day=4)
    thur_ids = [a.recipe_id for a in thur]
    # thur_ids = np.array(th_rec_ids)
    thur_name = [c.recipe_name for c in thur]
    # thur_name = np.array(th_rec_name)

    fri = RecipeUser.query.filter_by(user_id=user, day=5)
    fri_ids = [a.recipe_id for a in fri]
    # fri_ids = np.array(f_rec_ids)
    fri_name = [c.recipe_name for c in fri]
    # fri_name = np.array(f_rec_name)

    sat = RecipeUser.query.filter_by(user_id=user, day=6)
    sat_ids = [a.recipe_id for a in sat]
    # sat_ids = np.array(s_rec_ids)
    sat_name = [c.recipe_name for c in sat]
    # sat_name = np.array(s_rec_name)

    sun = RecipeUser.query.filter_by(user_id=user, day=7)
    sun_ids = [a.recipe_id for a in sun]
    # sun_ids = np.array(sn_rec_ids)
    sun_name = [c.recipe_name for c in sun]
    # sun_name = np.array(sn_rec_name)

    if has_recipes_saved:
        print(recipes)
        pass
    else:
        print("no recipes")

        mon_name = ["No meals saved for Monday"]
        mon_ids = [""]
        tues_name = ["No meals saved for Tuesday"]
        tues_ids = [""]
        wed_name = ["No meals saved for Wednesday"]
        wed_ids = [""]
        thur_name = ["No meals saved for Thursday"]
        thur_ids = [""]
        fri_name = ["No meals saved for Friday"]
        fri_ids = [""]
        sat_name = ["No meals saved for Saturday"]
        sat_ids = [""]
        sun_name = ["No meals saved for Sunday"]
        sun_ids = [""]

    return flask.jsonify(
        {
            "mon_ids": mon_ids,
            "mon_name": mon_name,
            "tues_ids": tues_ids,
            "tues_name": tues_name,
            "wed_ids": wed_ids,
            "wed_name": wed_name,
            "thur_ids": thur_ids,
            "thur_name": thur_name,
            "fri_ids": fri_ids,
            "fri_name": fri_name,
            "sat_ids": sat_ids,
            "sat_name": sat_name,
            "sun_ids": sun_ids,
            "sun_name": sun_name,
        }
    )


@bp.route("/update", methods=["POST"])
def update():
    print("here")
    user = current_user.user_id
    update = flask.request.json.get("update")
    title = flask.request.json.get("title")

    id = ""
    day = ""
    for key in update:
        if update[key] == "1":
            id = key
            day = update[key]
            print(key)
        if update[key] == "2":
            id = key
            day = update[key]
            print(key)
        if update[key] == "3":
            id = key
            day = update[key]
            print(key)
        if update[key] == "4":
            id = key
            day = update[key]
            print(key)
        if update[key] == "5":
            id = key
            day = update[key]
            print(key)
        if update[key] == "6":
            id = key
            day = update[key]
            print(key)
        if update[key] == "7":
            id = key
            day = update[key]
            print(key)

        db.session.add(
            RecipeUser(recipe_id=id, recipe_name=title, user_id=user, day=day)
        )
        db.session.commit()
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

    key = list(recipe_ids.values())
    value = list(recipe_ids.keys())

    return flask.jsonify({"key": key, "value": value})


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
    app.run(port=int(os.getenv("PORT", 3000)), debug=True)
# host=os.getenv("IP", "0.0.0.0"),
