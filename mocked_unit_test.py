import unittest
from unittest.mock import MagicMock, patch


from spoonacular import *


class SearchRecipeByIngredTests(unittest.TestCase):
    def test_search_recipe_by_ingred(self):
        with patch("spoonacular.requests.get") as mock_requests_get:
            mock_response = MagicMock()

            mock_response.json.side_effect = [
                {},
                {
                    "id": 73420,
                },
            ]
            mock_requests_get.return_value = mock_response

            self.assertEqual(
                search_recipe_by_ingred("apples,flour,sugar"),
                {},
                {
                    640352: "Cranberry Apple Crisp",
                    632660: "Apricot Glazed Apple Tart",
                    641803: "Easy & Delish! ~ Apple Crumble",
                    73420: "Apple Or Peach Strudel",
                    157103: "Apple Cinnamon Blondies",
                },
            )


class GetRecipeByCuisineTest(unittest.TestCase):
    def test_get_recipe_by_cuisine(self):
        with patch("spoonacular.requests.get") as mock_requests_get:

            self.assertEqual(
                get_recipe_by_cuisine("british"),
                {},
                {
                    75081: "Beef Wellington",
                    643450: "Fresh Cherry Scones",
                    639637: "Classic scones",
                    658300: "Rich Jelly Scones",
                    637675: "Cheesy Potato Corn Scones",
                },
            )


if __name__ == "__main__":
<<<<<<< HEAD
    unittest.main()
=======
    unittest.main()
>>>>>>> mealboard_cont
