import requests
from bs4 import BeautifulSoup


# URL of the website to scrape
url = 'https://inserturl'

#Header
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
response = requests.get(url, headers=headers)

# Cookies
cookies = {
    'cookie_name1': 'cookie_value1',
    'cookie_name2': 'cookie_value2',
}

# Send an HTTP request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract data using BeautifulSoup methods
    # Example: Extract all links on the page
    links = soup.find_all('a')
    for link in links:
        print(link.get('href'))
else:
    print(f"Error: {response.status_code}")
