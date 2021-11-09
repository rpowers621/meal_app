import unittest
from unittest.mock import MagicMock, _patch
import sys
import os

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

            self.assertEqual(search_recipe_by_ingred("apples,flour,sugar"), None)
            self.assertEqual(search_recipe_by_ingred("apples,flour,sugar"), 73420)


if __name__ == "__main__":
    unittest.main()
