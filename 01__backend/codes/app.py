import json

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def hello_world():
    return "Hello, World!"


# GET /api/v1/books


@app.route("/api/v1/books", methods=["GET"])
def get_books():

    # Open the JSON file
    with open('books.json') as file:
        # Load the JSON data into a variable
        data = json.load(file)

    # Return the JSON data as a response
    return jsonify(data)
