from random import choice, randint
from app import app
from models import db, Item, List, Post, Forum

def make_items():
    print("______ITEMS TABLE______")
    Item.query.delete()
    print("Deleted Items from database...")
    print("Creating Items for database...")
    item_names = [
        "Pink Butterfly"
        "Orange Butterfly"
        "Red Butterfly"
        "Purple Butterfly"
    ]

    items = []
    for name in item_names:
        item = Item(name=name)
        items.append(item)

    db.session.add_all(items)
    db.session.commit()
    print(f"{len(items)} Items have been seeded into database...\n")    