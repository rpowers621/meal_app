import unittest
from spoonacular import *


class RecipeTests(unittest.TestCase):
    def test_get_recipe_instructions(self):

        self.assertEqual(
            get_recipe_instructions("715540"),
            (
                {
                    "step 1": "Cut up a Granny Smith green apple, strawberries, and add blackberries",
                    "step 2": "Mix in with Romaine lettuce",
                    "step 3": "Toss in some basalmic vinaigrette",
                }
            ),
        )

    def test_get_recipe_by_ingreds(self):
        self.assertEqual(
            search_recipe_by_ingred("apples,flour,sugar"),
            {
                640352: "Cranberry Apple Crisp",
                632660: "Apricot Glazed Apple Tart",
                641803: "Easy & Delish! ~ Apple Crumble",
                73420: "Apple Or Peach Strudel",
                157103: "Apple Cinnamon Blondies",
            },
        )


if __name__ == "__main__":
    unittest.main
