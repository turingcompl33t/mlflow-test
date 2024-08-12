"""
To run a tracking server with this app, use `mlflow server --app-name custom_app`.
"""
import logging
from flask_cors import CORS

# This would be all that plugin author is required to import
from mlflow.server import app as custom_app
CORS(custom_app)

app_logger = logging.getLogger(__name__)

# Configure the app
custom_app.config["MY_VAR"] = "config-var"
app_logger.warning(f"Using {__name__}")


def is_logged_in():
    return True


@custom_app.before_request
def before_req_hook():
    """A custom before request handler.

    Can implement things such as authentication, special handling, etc.
    """
    if not is_logged_in():
        app_logger.warning("Hello from before request!")
        return "Unauthorized", 403
