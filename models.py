from app import db

class UserInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Username Address %r>' % self.email


user_recipes = db.Table(
    'user_recipes', 
    db.Column('user_id', db.Integer, db.ForeignKey('googleuser.user_id'))
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipe.recipe_id'))
    )

class GoogleUser(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_recipes = db.relationship('Recipe', secondary='user_recipes', backref=db.backref('user_recipes', lazy='dynamic'))

class Recipe(db.Model):
    recipe_id = db.Column(db.Integer, primary_key=True)
    recipe_name = db.Column(db.String(120), nullable=False)

db.create_all()
