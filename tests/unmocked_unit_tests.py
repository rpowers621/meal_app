import unittest
import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
sys.path.append(parent)

from spoonacular import *

INPUT = "INPUT"
EXPECTED_OUTPUT = "EXPECTED_OUTPUT"
