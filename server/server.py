from my_app import create_app
import get_twitter_content


app = create_app()

@app.route('/api/<search_term>')
def api(search_term):
   print('SEARCH TERM' + search_term)
   results = get_twitter_content.get_twitter_content(search_term)
   return results


if __name__ == '__main__':
   app.run(debug = True)