from bs4 import BeautifulSoup
import requests

url = "https://example.com"  # Demo URL
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
data = soup.find_all(["h2", "span"], class_=["product-title", "desc-price"])
name = data[0].text
price = data[1].text

print(name)
print(price)
