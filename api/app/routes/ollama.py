from flask import Blueprint, request
from flask_login import login_required, login_user, logout_user, current_user
import json

# Custom modules
from logger import logger

from app.utils.validators import validate_none, validate_email
from app.utils.responses import (
    APIBaseException,
    NotFoundException,
    ConflictException,
    UnauthorizedException,
    Success,
)

# Constants
from app import ollama_client
from app.constants import STRINGS


"""
The APIs to get the current session info
"""
ollama_bp = Blueprint("ollama", __name__)


@ollama_bp.route("/chat", methods=["POST"])
# @login_required
def chat():
    # Get the required prompt from the body of the request
    __json = request.get_json()
    query = __json["query"]

    messages = [
        ollama_client.message(
            role="system",
            content="Your work is to help the human get through their problem",
        ),
        ollama_client.message(
            role="user",
            content=query,
        ),
    ]

    return Success(
        msg="success", payload=ollama_client.chat(messages=messages)
    ).response
