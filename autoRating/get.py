# === import libs ===

from urllib.request import urlopen, Request # open URLs; Request to fix blocked user-agent: https://stackoverflow.com/questions/16627227/
from bs4 import BeautifulSoup # BeautifulSoup; parsing HTML
import ssl # fix certificate issue: https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate
import certifi # fix certificate issue: https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate
from datetime import datetime # calculate script's run time
import re # regex; extract substrings
import time # delay execution; https://stackoverflow.com/questions/3327775/can-the-execution-of-statements-in-python-be-delayed

# === start + run time ===

print("Starting...")
start_time = time.time() # run time start

# === URL to scrape ===

page_url = "https://app.growthmentor.com/mentors/kuba-rdzak" 

# === open & scrape ===

print("Opening page...")
# print(page_url) # debug
request = Request(page_url, headers={'User-Agent': 'XYZ/3.0'}) # fix: Request -> blocked user agent
page = urlopen(request, timeout=3, context=ssl.create_default_context(cafile=certifi.where())) # fix: context -> certificate issue

print("Scraping page...")
soup = BeautifulSoup(page, 'html.parser') # parse the page

# === get # of sessions ===

print('Getting # of sessions...')
get_sessions = soup.select("body > div > div.profile-header.mb-4 > div > div > div.profile-stats > div > div > div > div:nth-child(2) > div > div:nth-child(2) > h6") # look & take # of sessions 
value = str(get_sessions) # convert list to string so it can be taken by regex
sessions = re.search("(?<=\>)(.*?)(?=\<)", value) # extract number 
sessions = sessions.group() # returns the part of the string where there was a match
print(f"Sessions: {sessions}") # format: #

with open('./sessions.txt', 'w') as file_sessions: # write # of sessions to .txt file
    file_sessions.write(sessions) # write # of sessions to .txt file

# === get rating ===

print('Getting rating...')
get_rating = soup.select("body > div > div.profile-header.mb-4 > div > div > div.profile-stats > div > div > div > div:nth-child(2) > div > div:nth-child(3) > h6") # look & take rating
value = str(get_rating) # convert list to string so it can be taken by regex
rating = re.search("(?<=\>)(.*?)(?=\<)", value) # extract number 
rating = rating.group() # returns the part of the string where there was a match
print(f"Rating: {rating}") # format: #.##

with open('./rating.txt', 'w') as file_rating: # write rating to .txt file
    file_rating.write(rating) # write rating to .txt file

# === run time ===

end_time = time.time() # run time end 
run_time = round(end_time-start_time,2)
print("Script run time:", run_time, "seconds. That's", round(run_time/60,2), "minutes.")