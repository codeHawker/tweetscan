from flask import Flask
# from flask_cors import CORS
from server.blueprints import api, frontend

def create_app():
    app = Flask(__name__, static_folder = "../build", static_url_path = "")

    if app.config["ENV"] == "production":
        app.config.from_object("server.config.ProductionConfig")

    elif app.config["ENV"] == "testing":
        app.config.from_object("server.config.TestingConfig")

    else:
        app.config.from_object("server.config.DevelopmentConfig")


    # cors = CORS()
    # cors.init_app(app)

    app.register_blueprint(api.bp)
    app.register_blueprint(frontend.bp)

    return app