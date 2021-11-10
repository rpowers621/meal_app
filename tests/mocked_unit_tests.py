import unittest
from unittest.mock import MagicMock, patch
import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
sys.path.append(parent)

from spoonacular import search_recipe_by_ingred

INPUT = "INPUT"
EXPECTED_OUTPUT = "EXPECTED_OUTPUT"


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
                {
                    640352: "Cranberry Apple Crisp",
                    632660: "Apricot Glazed Apple Tart",
                    641803: "Easy & Delish! ~ Apple Crumble",
                    73420: "Apple Or Peach Strudel",
                    157103: "Apple Cinnamon Blondies",
                },
            )


if __name__ == "__main__":
    unittest.main()
