from bs4 import BeautifulSoup
import requests

def Scrap():
    pageToScrap = "http://www.gornik.tbg.net.pl/Numerek/numerek.php"
    response = requests.get(pageToScrap)  # Make a request to the website
    soup = BeautifulSoup(response.content, "html.parser")  # Parse the response content
    numerek = soup.find_all('b')

    # Loop through each tag to check if the text content is a digit
    for tag in numerek:
        text = tag.get_text().strip()  # Get and clean the text content
        if text.isdigit():
            print(f" {text}")

    file = open('output.txt', 'w')
    file.write(text)
    file.close()
Scrap()
