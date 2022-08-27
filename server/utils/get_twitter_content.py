from server.utils.stop_words import stopwords
import requests
import pandas as pd
import re
import os
from collections import Counter

search_url = "https://api.twitter.com/2/tweets/search/recent"

try:
    bearer_token = os.environ['TWITTER_BEARER_TOKEN']
except:
    raise Exception("Please set environment variable $TWITTER_BEARER_TOKEN")

def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2RecentSearchPython"
    return r



def connect_to_endpoint(url, params):
    response = requests.get(url, auth=bearer_oauth, params=params)
    # print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()



def get_search_response(query):
    json_response = connect_to_endpoint(search_url, query)
    return json_response



def search_recent_tweets(search_term):
    max_results = 1000
    # Optional params: start_time,end_time,since_id,until_id,max_results,next_token,
    # expansions,tweet.fields,media.fields,poll.fields,place.fields,user.fields

    query_params = {
        'query': search_term + ' -is:retweet' ,
        'tweet.fields': 'public_metrics',
        'max_results': 100,
        }

    tweet_responses = []

    for i in range(1,max_results,100):
        json_response = get_search_response(query = query_params)
        tweet_responses += json_response['data']

        if 'next_token' in json_response['meta']:
            query_params['next_token'] = json_response['meta']['next_token']
        else:
            break

    return tweet_responses



def get_tweet_info(df):
    recent_tweets = df['text'].to_list()[0:20]
    most_retweeted = df['text'].iloc[df['public_metrics.retweet_count'].idxmax()]
    most_liked = df['text'].iloc[df['public_metrics.like_count'].idxmax()]
    return recent_tweets, most_retweeted, most_liked



def get_most_common_words(tweet_df, n=20):
    all_words = [word for tweet in tweet_df['cleaned_words'].iloc[:] for word in tweet]
    document_frequency = Counter(all_words)
    return document_frequency.most_common(n)



def extract_words(tweet):
    stop_words = stopwords
    words = re.sub("[^\w]", " ",  tweet).split()
    cleaned_words = [w.lower() for w in words if w not in stop_words] 
    return cleaned_words



def get_twitter_content(search_term):
    json_results = search_recent_tweets(search_term)

    results_df = pd.json_normalize(json_results)
    results_df['cleaned_words'] = results_df['text'].apply(extract_words)    

    recent_tweets, most_retweeted, most_liked = get_tweet_info(results_df)
    top_words = get_most_common_words(results_df)

    return {
        'recent_tweets': recent_tweets, 
        'most_retweeted': most_retweeted, 
        'most_liked': most_liked, 
        'top_words': top_words
        }