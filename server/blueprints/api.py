from flask import Blueprint
from server.utils.get_twitter_content import get_twitter_content

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/<search_term>')
def api(search_term):
   return get_twitter_content(search_term)
