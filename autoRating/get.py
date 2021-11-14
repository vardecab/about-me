# === import libs ===

from urllib.request import urlopen, Request # open URLs; Request as a workaround for blocked user-agent: https://stackoverflow.com/questions/16627227/
from bs4 import BeautifulSoup # BeautifulSoup; parsing HTML
import ssl # workaround for certificate issue: https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate
import certifi # workaround for certificate issue: https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate
from datetime import datetime # calculate script's run time
import re # regex; extract substrings
import time # delay execution; https://stackoverflow.com/questions/3327775/can-the-execution-of-statements-in-python-be-delayed
import webbrowser # open URLs
from sys import platform # check platform (Windows/Linux/macOS)
if platform == 'win32':
    from win10toast_click import ToastNotifier # Windows 10 notifications
    toaster = ToastNotifier() # initialize win10toast
elif platform == 'darwin':
    import pync # macOS notifications 

# === start + run time ===

print("Starting...")
start_time = time.time() # run time start

# === URL to scrape ===

page_url = "https://app.growthmentor.com/mentors/kuba-rdzak" # my GrowthMentor profile page

# === open & scrape ===

print("Opening page...")
# print(page_url) # debug
request = Request(page_url, headers={'User-Agent': 'XYZ/3.0'}) # workaround for: Request -> blocked user agent
page = urlopen(request, timeout=3, context=ssl.create_default_context(cafile=certifi.where())) # workaround for: context -> certificate issue

print("Scraping page...")
soup = BeautifulSoup(page, 'html.parser') # parse the page

# === get # of sessions ===

print('Getting # of sessions...')
get_sessions = re.search("(?<=coursesCount)(.*)(?=favoritedBy)", str(soup)) # find target number in the structure of downloaded HTML file 
search_sessions = re.findall("[0-9]+", str(get_sessions)) # extract numbers from string ^
sessions = str(search_sessions[2]) # there should be 3 numbers in the list - select 3rd
print(f"Sessions: {sessions}") # format: #

with open('./sessions.txt', 'w') as file_sessions: # write # of sessions to .txt file
    file_sessions.write(str(sessions)) # write # of sessions to .txt file

# === get rating ===

print('Getting rating...')
get_rating = re.search("(?<=Rating)(.*)(?=profe)", str(soup)) # find target number in the structure of downloaded HTML file
search_rating = re.findall("[0-9].[0-9]+", str(get_rating)) # extract numbers from string ^
rating = str(search_rating[2]) # there should be 3 numbers in the list - select 3rd
print(f"Rating: {rating}") # format: #.## (#.#)

with open('./rating.txt', 'w') as file_rating: # write rating to .txt file
    file_rating.write(rating) # write rating to .txt file

# === get # of reviews === 

print('Getting # of reviews...')
get_reviews = re.search("(?<=MeCount)(.*)(?=slug)", str(soup)) # find target number in the structure of downloaded HTML file
search_reviews = re.findall("[0-9]+", str(get_reviews)) # extract numbers from string ^
reviews = str(search_reviews[2]) # there should be 3 numbers in the list - select 3rd
print(f"Reviews: {reviews}") # format: #

with open('./reviews.txt', 'w') as file_reviews: # write # of reviews to .txt file
    file_reviews.write(reviews) # write # of reviews to .txt file

# === notifications === 

def open_url(): # callback for Windows 10 notification 
    # try: 
    webbrowser.open_new(page_url)
        # print('')  
    # except: 
        # print('')

if platform == "darwin":
    pync.notify(f'Update complete.', title='about-me', subtitle='autoRating', open=page_url, contentImage="https://i.postimg.cc/pdt9gYkv/star.png")
elif platform == "win32":
    toaster.show_toast(title="about-me", msg='Update complete.', icon_path="../icons/star.ico", duration=None, threaded=True, callback_on_click=open_url) # duration=None - leave notification in Notification Center; threaded=True - rest of the script will be allowed to be executed while the notification is still active

# === run time ===

end_time = time.time() # run time end 
run_time = round(end_time-start_time,2)
print("Script run time:", run_time, "seconds. That's", round(run_time/60,2), "minutes.")