from flask import (
    Blueprint,
    send_from_directory,
)
import os

static_folder="../build"
bp = Blueprint('frontend', __name__)

# Serve React App
@bp.route('/', defaults={'path': ''})
@bp.route('/<path:path>')
def serve(path):

    if path != "" and os.path.exists( static_folder + "/" + path):
        return send_from_directory(static_folder, path)
    else:
        return send_from_directory(static_folder, 'index.html')
