from random import choice, randint
from models import Item, List, Post, Forum
from config import db, app
import requests

with app.app_context():
    print("______ITEMS TABLE______")
    Item.query.delete()
    print("Deleted Items from database...")
    print("Creating Items for database...")
    item_names = [
    ]

    response = requests.get("https://acnhapi.com/v1/bugs").json()
    bugs_list = list(response.values())

    items = []
    for bugs in bugs_list:
        item = Item(title=bugs["name"]["name-USen"], category="bug", time_available=bugs["availability"]["month-northern"], month_available=bugs["availability"]["month-array-northern"][0], image=bugs["icon_uri"])
        items.append(item)

    db.session.add_all(items)
    db.session.commit()
    print(f"{len(items)} Items have been seeded into database...\n")  

    response = requests.get("https://acnhapi.com/v1/fish").json()
    fish_list = list(response.values())

    items = []
    for fish in fish_list:
        item = Item(title=fish["name"]["name-USen"], category="fish", time_available=fish["availability"]["month-northern"], month_available=fish["availability"]["month-array-northern"][0], image=fish["icon_uri"])
        items.append(item)

    db.session.add_all(items)
    db.session.commit()  
        